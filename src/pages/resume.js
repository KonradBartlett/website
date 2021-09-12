import { ScavengerButton } from '../components/scavenger';
import './resume.scss';
import ProgressBar from "@ramonak/react-progress-bar";

export function Resume() {
    document.title = "Resume - Konrad Bartlett"
    
    return (
        <div className="resume">
            <ScavengerButton colour="red" index="2" mode="avoid"/>
            <div className="card">
                <h2>Konrad Bartlett</h2>
                <hr/>

                <h3>Education</h3>
                <h4>B.Sc.H | Trent University | 2019 </h4>
                <ul>
                    <li>Major: Computation and Information Systems</li>
                    <li>Specialization: Data Analytics</li>
                </ul>

                <h3>Certificates</h3>
                <ul>
                    <li><h4>Google IT Support Professional Certificate | Google | 2021</h4></li>
                </ul>

                <h3>Work Experience</h3>
                <h4>Full Stack Developer | Floatplane Inc. | 2021 - Present</h4>
                <ul>
                    <li>Shopify, React, GraphQL</li>
                    <li>Develop and maintain the merchandise store for a large media company</li>
                    <li></li>
                </ul>

                <h4>Full Stack Developer | Gyroscopic Technologies | 2020 - 2021</h4>
                <ul>
                    <li>.NET Core, React, React Native, Postres, AWS</li>
                    <li>Create a web application for creating customizable surveys used to analyze a company’s eligibility for remote work</li>
                    <li>Work with a team of developers to develop applications using React and related technologies</li>
                    <li>Communicate with clients to do requirement specification on projects and ensure the application fit requirement needs</li>
                </ul>

                <h4>Full Stack Developer | TS Manufacturing | 2019 - 2020</h4>
                <ul>
                    <li>ASP.NET, Angular, PHP, Micorosft SQL, Microsoft NAV, AutoCAD</li>
                    <li>Develop in house web applications used for project management and data management</li>
                    <li>Work with a team of developers using the Agile management structure to develop Autodesk - AutoCAD / Inventor plugins</li>
                    <li>Interact with key stakeholders to do requirement specification on projects and develop software that was right for them</li>
                </ul>

                <h4>IT Desk Student Analyst | Trent IT | 2018 - 2019</h4>
                <ul>
                    <li>Interact with incoming students and faculty at a service desk and help them resolve their problem</li>
                    <li>Maintain electronic devices around campus, fixing IT related issues for a variety of cases</li>
                    <li>Main Switch board for Trent University, listen to caller’s requests and transferring them to appropriate department</li>
                </ul>

                <h4>TA and Student Grader | Trent University | 2018 - 2019</h4>
                <ul>
                    <li>Undergraduate teaching assistant for COIS 2300: Computer Hardware Organization and Design and COIS 4400: Data Mining</li>
                    <li>Create rubrics and answer keys for marking purposes, as well as grading students’ assignments, midterms, and exams</li>
                    <li>Engaging and interacting with students inside and outside of classroom to assist them in their learning goals</li>
                </ul>

                <h4>Data Analyst Internship | Lowfoot | 2018</h4>
                <ul>
                    <li>Hadoop, SQL, Java, Python</li>
                    <li>Create a data warehouse to store device data about IoT devices and energy consumption</li>
                    <li>Create interface for data warehouse and use data collected to train neural networks to predict energy spikes</li>
                    <li>Work in close communication with internship partner and employers to ensure that an optimal program is produced</li>
                </ul>
            </div>
            <a className="resume_button" href="./documents/KonradBartlett_Resume.pdf" download="KonradBartlett_Resume.pdf">Download Resume</a>
        </div>
    );
}


export function Resume2() {
    document.title = "Resume - Konrad Bartlett"
    
    return (
        <div className="resume">
            <ScavengerButton colour="red" index="2" mode="avoid"/>
            <div className="card cv">


                <h1>Konrad Bartlett</h1>
                <section className="top">
                    <div>
                        <div>
                            <h4>Specialty 1</h4>
                            <p>Text</p>
                        </div>
                    </div>
                    <div className="bars">
                        <details>
                            <summary>
                                React
                                <ProgressBar completed={95} isLabelVisible={false} bgColor="#20b573"/>
                            </summary>
                            <p>test</p>
                        </details>
                        <details>
                            <summary>
                                CSS + SASS
                                <ProgressBar completed={83} isLabelVisible={false} bgColor="#7fc356"/>
                            </summary>
                            <p>test</p>
                        </details>
                        <details>
                            <summary>
                                .NET
                                <ProgressBar completed={67} isLabelVisible={false} bgColor="#f4c70c"/>
                            </summary>
                            <p>test</p>
                        </details>
                        <details>
                            <summary>
                                Angular
                        <ProgressBar completed={67} isLabelVisible={false} bgColor="#f4c70c"/>
                            </summary>
                            <p>test</p>
                        </details>
                        <details>
                            <summary>
                                Shopify
                        <ProgressBar completed={50} isLabelVisible={false} bgColor="#f47938"/>
                            </summary>
                            <p>test</p>
                        </details>
                    </div>
                </section>

                <section className="middle">
                    <h2>EDUCATION</h2>
                    <div>
                        <div>
                            <h4>B.Sc.H Computation and Information Systems<br/>Trent University | 2019</h4>
                            <p>Degree: Honors Bachelor of Science<br/>
                            Graduation Date: 2019<br/>
                            Major: Computation and Information Systems<br/>
                            Specialization: Data Science</p>
                        </div>
                    </div>

                    <h2>Certificates</h2>
                    <div>
                        <div>
                            <h4>Google IT Support Professional Certificate | Google | 2021</h4>
                        </div>
                    </div>
                </section>

                <section class="bottom">
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
                            <li>Created enterlirise applications for a engineering firm, including the creation of custom AutoCAD plugins and applications used for project management.</li>
                            <li>Interact with key stakeholders to do requirement specification on projects and develop software that was right for them</li>
                        </ul>
                    </div>
                </section>

            </div>
            <a className="resume_button" href="./documents/KonradBartlett_Resume.pdf" without rel="noopener noreferrer" target="_blank">Download Resume</a>
        </div>
    );
}