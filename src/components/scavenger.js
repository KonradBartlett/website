import { useEffect, useState } from "react";
import toastr, { options } from "toastr";
import './scavenger.css';
import { Fireworks } from 'fireworks-js';
import Confetti from 'react-dom-confetti';

export const ScavengerButton = (props) => { 
    const [hidden, setHidden] = useState(localStorage.getItem('konradScavenger') != null ? JSON.parse(localStorage.getItem('konradScavenger'))[props.index] == 1 : true);
    const [currentColour, setCurrentColour] = useState(props.colour);
    const [left, setLeft] = useState(100);
    const [top, setTop] = useState(100);
    const [isExploding, setIsExploding] = useState(false);
    const [scaleX, setScaleX] = useState(1);
    const [rainbow, setRainbow] = useState(' ')

    var currentBounceColour = `hsl(${Math.random() * 255}, 100%, 60%)`;
        
    useEffect(() => {

      var interval1, interval2, colourInverval = '';
    // set movement mode
    if(props.mode == 'fade'){
        const fadePosition = () => {
            setLeft(`${Math.floor(Math.random() * 90 + 5)}vw`);
            setTop(`${Math.floor(Math.random() *  90 + 5)}vh`);
        }
        fadePosition();
        interval1 = setInterval(fadePosition, 4000);
    } else if(props.mode == 'avoid'){
         
          var mouseX;
          var mouseY;
      
          const onMouseUpdate = (e) => {
            mouseX = e.pageX;
            mouseY = e.pageY;
          }
            
          document.addEventListener('mousemove', onMouseUpdate, false);
          document.addEventListener('mouseenter', onMouseUpdate, false);
          
          var positionX = window.screen.width/2;
          var positionY = window.screen.height/2;
            
          setLeft(`${positionX}px`);
          setTop(`${positionY}px`);
            
          //creating Vector object
          var Vector = function(x,y) {
            this.x = x;
            this.y = y;
          } 
          var v1 = new Vector(0,0)
          
          const avoidMouse = () => {
            
            Vector.prototype.normalize = function() {
            var length = Math.sqrt(this.x*this.x+this.y*this.y); //calculating length
              this.x = this.x/length; //assigning new value to x (dividing x by length of the vector)
              this.y= this.y/length; //assigning new value to y
            }
            
            v1 = new Vector(positionX - mouseX,positionY - mouseY) //creating new instance of Vector object
            v1.normalize() // normalizing our newly created instance
            
            // Update position if mouse isn't near / over button 
            if(   positionX < mouseX + 10 && positionX > mouseX - 90
               && positionY < mouseY + 10 && positionY > mouseY - 90){
              // I can figure out how to do it not greater than
            } else {
              // borders against side of screen
              if(positionX < 51){
                positionX += 1;
              } else if(positionX > window.screen.width - 101){
                positionX -= 1;
              }
              if(positionY < 51){
                positionY += 1;
              } else if(positionY > document.body.scrollHeight - 101){
                positionY -= 1;
              }
              if(!isNaN(positionX - mouseX) && !isNaN(positionY - mouseY)){
                positionX += v1.x;
                positionY += v1.y;
              } 
            }

            setLeft(`${positionX}px`);
            setTop(`${positionY}px`);
          }
      
          avoidMouse();
          interval1 = setInterval(avoidMouse, 2);
        } else if(props.mode == 'bounce'){
          
          const changeColour = () => {
            currentBounceColour = `hsl(${Math.random() * 255}, 100%, 60%)`;
            setCurrentColour(currentBounceColour);
          }
      
          changeColour();
          interval1 = setInterval(changeColour, 12500);
          interval2 = setInterval(changeColour, 9000);
        }

    // set colour of icon
    if(props.colour && props.mode != 'bounce'){
        if(props.colour == 'rainbow'){
          setRainbow(' rainbow')
          // const getRandomColour = () => {
          //   return {r: Math.random()*255, g: Math.random()*255, b:Math.random()*255}
          // }
              
          // const lerp = (a, b, u) => {
          //     return (1 - u) * a + u * b;
          // };
          
          // const fade = (start, end, duration) => {
          //     var interval = 10;
          //     var steps = duration / interval;
          //     var step_u = 1.0 / steps;
          //     var u = 0.0;
          //     var theInterval = setInterval(function() {
          //         if (u >= 1.0) {
          //             clearInterval(theInterval);
          //         }
          //         var r = Math.round(lerp(start.r, end.r, u));
          //         var g = Math.round(lerp(start.g, end.g, u));
          //         var b = Math.round(lerp(start.b, end.b, u));
          //         var colorname = 'rgb(' + r + ',' + g + ',' + b + ')';
          //         setCurrentColour(colorname);
          //         u += step_u;
          //     }, interval);
          // };
          
          // var start = getRandomColour();
          // var end = getRandomColour();
          
          // const setRandomColour = () => {
          //   start = end;
          //   end = getRandomColour();
          //   fade(start, end, 500);
          // };
    
          // setRandomColour();
          // colourInverval = setInterval(setRandomColour, 500);
        }
      }

      return () => {
        clearInterval(interval1);
        clearInterval(interval2);
        clearInterval(colourInverval);
      }
    },[])
        
    const handleClick = (e) => {    
      // update the array in localstorage based on the passed index of the button
      setHidden(true)
      setIsExploding(true);

      var scavengerCurrent = JSON.parse(localStorage.getItem('konradScavenger'));
      scavengerCurrent[props.index] = 1;
      localStorage.setItem('konradScavenger', JSON.stringify(scavengerCurrent));
     
      // display a popup notifying the user of their progress or if they have completed the hunt
      var count = JSON.parse(localStorage.getItem('konradScavenger')).filter(x => x == 1).length;
      var total = JSON.parse(localStorage.getItem('konradScavenger')).length;
      if(count == total){
        toastr.success('Congratulations! You have completed my scavenger hunt!');

        const container = document.querySelector('.fireworks')
        const fireworks = new Fireworks(container, { /* options */ })
        
        fireworks.start()

        setTimeout(() => {
            fireworks.stop();
        }, 10000)
      } else { 
        toastr.info(`You have found a bird!\nProgress: ${count}/${total}`);
      }
    }
    const confettiConfig = {
      angle: 90,
      spread: 360,
      startVelocity: 40,
      elementCount: 70,
      dragFriction: 0.12,
      duration: 3000,
      stagger: 3,
      width: "10px",
      height: "10px",
      perspective: "649px",
      colors: props.colour == 'rainbow' && props.mode != 'bounce'? ["#a864fd", "#29cdff", "#78ff44", "#ff718d", "#fdff6a"] : [currentColour]
    };

    

    return (
        <div>
            <button id="scavengerButton" 
                style={{left: left, top: top, border:'none', background: 'none'}}
                className={props.mode} onClick={handleClick}>
                  <svg xmlns="http://www.w3.org/2000/svg" className={rainbow} style={{height: '80px', cursor: 'pointer', display: hidden && 'none', transform: `scaleX(${scaleX})`}}  viewBox="0 0 216.19 236.82"><path className="a" fill={currentColour} d="M729,399a5,5,0,1,1-5-5,5,5,0,0,1,5,5ZM665.28,537.83c73.06-12.26,112.4-71.45,76-111.32q4.44-11,20.14-9.55,4.47-8.4-18.58-16.34c-9.41-25.91-43.18-23.47-51.63,10.9q-28.38-35.82-65.95-51.93-7,4.5.3,51.63,21.5,2.25,31,8.95-90.9-10.43-110.65.37,57.61,72,115.35,85.8-7.25,34.82-53.42,89.24,9.74,7.81,85.35-57.6-26.05,3.43-27.9-.15Z" transform="translate(-545.9 -359.59)"/></svg>
                <Confetti active={isExploding} config={confettiConfig} />
            </button>
        </div>
    );
    
}

  
export const startScavenger = () => {
    localStorage.setItem('konradScavenger', JSON.stringify([0,0,0,0]))
    window.location.reload();
};