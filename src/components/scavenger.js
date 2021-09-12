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

    var currentBounceColour = `hsl(${Math.random() * 255}, 100%, 60%)`;
        
    useEffect(() => {

    // set movement mode
    if(props.mode == 'fade'){
        const fadePosition = () => {
            setLeft(`${Math.floor(Math.random() * 90 + 5)}vw`);
            setTop(`${Math.floor(Math.random() *  90 + 5)}vh`);
        }
        fadePosition();
        setInterval(fadePosition, 4000);
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
            if(   positionX < mouseX + 10 && positionX > mouseX - 50
               && positionY < mouseY + 10 && positionY > mouseY - 50){
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
          setInterval(avoidMouse, 2);
        } else if(props.mode == 'bounce'){
          
          const changeColour = () => {
            currentBounceColour = `hsl(${Math.random() * 255}, 100%, 60%)`;
            setCurrentColour(currentBounceColour);
          }
      
          changeColour();
          setInterval(changeColour, 12500);
          setInterval(changeColour, 9000);
        }

    // set colour of icon
    if(props.colour && props.mode != 'bounce'){
        if(props.colour == 'rainbow'){
    
          const getRandomColour = () => {
            return {r: Math.random()*255, g: Math.random()*255, b:Math.random()*255}
          }
              
          const lerp = (a, b, u) => {
              return (1 - u) * a + u * b;
          };
          
          const fade = (start, end, duration) => {
              var interval = 10;
              var steps = duration / interval;
              var step_u = 1.0 / steps;
              var u = 0.0;
              var theInterval = setInterval(function() {
                  if (u >= 1.0) {
                      clearInterval(theInterval);
                  }
                  var r = Math.round(lerp(start.r, end.r, u));
                  var g = Math.round(lerp(start.g, end.g, u));
                  var b = Math.round(lerp(start.b, end.b, u));
                  var colorname = 'rgb(' + r + ',' + g + ',' + b + ')';
                  setCurrentColour(colorname);
                  u += step_u;
              }, interval);
          };
          
          var start = getRandomColour();
          var end = getRandomColour();
          
          const setRandomColour = () => {
            start = end;
            end = getRandomColour();
            fade(start, end, 500);
          };
    
          setRandomColour();
          setInterval(setRandomColour, 500);
        }
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
                <svg style={{height: '40px', cursor: 'pointer', display: hidden && 'none'}} viewBox="0 0 512 512"><path fill={currentColour} d="M288 167.2v-28.1c-28.2-36.3-47.1-79.3-54.1-125.2-2.1-13.5-19-18.8-27.8-8.3-21.1 24.9-37.7 54.1-48.9 86.5 34.2 38.3 80 64.6 130.8 75.1zM400 64c-44.2 0-80 35.9-80 80.1v59.4C215.6 197.3 127 133 87 41.8c-5.5-12.5-23.2-13.2-29-.9C41.4 76 32 115.2 32 156.6c0 70.8 34.1 136.9 85.1 185.9 13.2 12.7 26.1 23.2 38.9 32.8l-143.9 36C1.4 414-3.4 426.4 2.6 435.7 20 462.6 63 508.2 155.8 512c8 .3 16-2.6 22.1-7.9l65.2-56.1H320c88.4 0 160-71.5 160-159.9V128l32-64H400zm0 96.1c-8.8 0-16-7.2-16-16s7.2-16 16-16 16 7.2 16 16-7.2 16-16 16z"></path></svg>
                <Confetti active={isExploding} config={confettiConfig} />
            </button>
        </div>
    );
    
}

  
export const startScavenger = () => {
    localStorage.setItem('konradScavenger', JSON.stringify([0,0,0,0,0]))
    window.location.reload();
};