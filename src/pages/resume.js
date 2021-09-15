import { ScavengerButton } from '../components/scavenger';
import './resume.scss';
import ProgressBar from "@ramonak/react-progress-bar";

export function Resume() {
    document.title = "Resume - Konrad Bartlett"
    
    return (
        <div className="page resume">
            <ScavengerButton colour="rainbow" index="2" mode="avoid"/>
            <div className="card cv">


                <section className="header">
                    <h1>Konrad Bartlett</h1>
                    <a className="resume_button dark_hover" href="./documents/KonradBartlett_Resume.pdf" rel="noopener noreferrer" target="_blank">Download Resume</a>
                </section>
                <hr/>
                <section className="top">
                    {/* <div>
                        <div>
                            <h4>Specialty 1</h4>
                            <p>Text</p>
                        </div>
                    </div> */}
                    <div className="bars">
                        <details>
                            <summary>
                                React
                                <ProgressBar completed={95} isLabelVisible={false} bgColor="#20b573"/>
                            </summary>
                            <p className="detail_blurb">
                                React is my preferred Javascript framework. 
                                I use React for all of my personal projects if possible as well as at work. 
                                While I used to be a huge Angular fan boy however I got a work position that required that I work in React, and I haven't looked back since. 
                                Having several years of experience using React professionally, as well for personal projects and I consider myself to be quite skilled at developing with it.
                            </p>
                        </details>
                        <details>
                            <summary>
                                CSS + SASS
                                <ProgressBar completed={83} isLabelVisible={false} bgColor="#7fc356"/>
                            </summary>
                            <p>
                                Being a professional front end developer I spend a large portion of my time staring at CSS, modifying and tweaking properties until I get the element looking just right. 
                                My preference is to use SCSS files over plain CSS for the extra flexibility and efficiency that it offers when creating style sheets. 
                                It is really enjoyable to me to find online tutorials to do novel things like animations, or really standard things like centering elements as efficiently as possible. 
                            </p>
                        </details>
                        <details>
                            <summary>
                                .NET
                                <ProgressBar completed={67} isLabelVisible={false} bgColor="#f4c70c"/>
                            </summary>
                            <p>
                                .NET is the first framework that I really fell in love with and spent a large amount of time with as C# is what was taught at school. 
                                Before I discovered the magic of Javascript and web development, I would always write my personal projects in C# prefering it's strongly typed and object oriented nature over other coding paradigms. 
                                I have several years experience as a full stack developer where I used some variation of .NET to develop APIs whether it be ASP.NET or .NET Core, I find the LINQ system extremely useful when creating controllers and data models.    
                            </p>
                        </details>
                        <details>
                            <summary>
                                Angular
                                <ProgressBar completed={67} isLabelVisible={false} bgColor="#f4c70c"/>
                            </summary>
                            <p>
                                Angular is the first Javascript framework that I used to create professional web applications. 
                                When I got my first position as a web developer the company that I worked for required the use of Angular as the framework for the front end of applications. 
                                It was the first time I had really dug into and used Javascript to it's fullest potential and I really fell in love and adopted Angular as my favourite framework for a while. 
                                Thinking back, I can remeber that I used to ask for Angular project textbooks for Christmas that would provide hundreds of pages of content outlining and walking through different 
                                    web applications that could be made using Angular and I learned a great deal from following along. 
                            </p>
                        </details>
                        <details>
                            <summary>
                                Shopify
                                <ProgressBar completed={50} isLabelVisible={false} bgColor="#f47938"/>
                            </summary>
                            <p>
                                My current position requires that I create Snippets, Apps, and Themes using Shopify for a while now. 
                                Shopify development is something that I am still getting the hang of, however the more I learn the more I am finding Shopify to be a robust and enjoyable platform to develop for. 
                                I write my Snippets using Preact, my Apps using Apollo, GraphQL, and NodeJS, and my Themes using Liquid however I am excited for Shopify to finally release their 'Hydrogen' theme 
                                    which promises to be a theme that entirely uses React and TypeScript.
                            </p>
                        </details>
                    </div>
                </section>

                <section className="middle">
                    <h2>EDUCATION</h2>
                    <div>
                        <div>
                            <h4>B.Sc.H Computation and Information Systems<br/>Trent University</h4>
                            <p>
                            <b>Degree:</b> Honors Bachelor of Science<br/>
                            <b>Graduation Date:</b> 2019<br/>
                            <b>Major:</b> Computation and Information Systems<br/>
                            <b>Specialization:</b> Data Science</p>
                        </div>
                    </div>

                    <h2>Certificates</h2>
                    <div>
                        <div>
                            <h4>Google IT Support Professional Certificate | Google | 2021</h4>
                        </div>
                    </div>
                </section>

                <section className="bottom">
                    <h2>WORK EXPERIENCE</h2>
                    <div className="cardWide">
                        <h4>
                            Full Stack Developer<br/>
                            Floatplane Inc. | 2021 - Present<br/>
                            React, Shopify
                        </h4>
                        <ul>
                            <li>Maintain and create features for a media companies' merchandise store. Worked on a total store redesign and several custom features for the Shopify store.</li>
                            <li>Regularly interact with designers and product owners to maintain a consistent store theme</li>
                        </ul>
                    </div>
                    <div>
                        <h4>
                            Full Stack Developer<br/>
                            Gyroscopic Technologies | 2020 - 2021<br/>
                            React, .NET Core, AWS, Postgres
                        </h4>
                        <ul>
                            <li>Designed and developed websites, and mobile applications at a high-volume consultation company. Was the lead developer on a survey application working in a team environment.</li>
                            <li>Work with a team of developers to develop applications using React and related technologies</li>
                            <li>Communicate with clients to do requirement specification on projects and ensure the application fit requirement needs</li>
                        </ul>
                    </div>
                    <div>
                        <h4>
                            Full Stack Developer<br/>
                            TS Manufacturing | 2019 - 2020<br/>
                            ASP.NET, Angular, Microsoft NAV
                        </h4>
                        <ul>
                            <li>Created enterprise applications for an engineering firm, including the creation of custom AutoCAD plugins and applications used for project management.</li>
                            <li>Interact with key stakeholders to do requirement specification on projects and develop software that was right for them</li>
                        </ul>
                    </div>
                </section>

            </div>
        </div>
    );
}