import React, {forwardRef} from "react";
import './about.css'

const AboutMe = () => {
    return (
        <div className="about-sec-container">
            <div className='about-sec fade-in' data-animate='fade-in'>
                <div className="about-left">
                    <p className="gradient-1">ABOUT ME</p>
                </div>
                <div className="about-right">
                    Hello! I'm Mr.Bekkam, a Fullstack developer, AI/ML Engineer and a MS graduate in Computer Science. With React.js, HTML, CSS, Figma and Node in my arsenal, I've been building things for the web for the past 3 years.
                    <br />
                    <br />
                   With extensive experience in designing and developing responsive web applications using technologies like React, Redux, and SCSS, I have successfully integrated complex features and streamlined interactions for users. My proficiency in tools such as Gulp, Webpack, and Bootstrap, along with a strong focus on accessibility and cross-browser compatibility, ensures seamless and efficient user experiences.  
                    <br />
                    <br />
                    I'm actively seeking opportunities to apply my expertise and passion for user-centric development. Open to collaboration and building together.
                    <br />
                    <br />
                    I am a passionate AI engineer dedicated to developing innovative solutions that leverage artificial intelligence to solve real-world problems. My recent projects include the "Gen AI: News Research Tool," which streamlines information retrieval from financial news articles using advanced NLP techniques, and a "Background Removal Tool" that utilizes deep learning models to accurately remove backgrounds from images. These projects showcase my expertise in AI and my commitment to creating impactful tools that enhance user experiences and efficiency.
                </div>
            </div>

            <div className="about-sec fade-in" data-animate='fade-in'>
                <div className="about-left">
                    <p className="gradient-1">SKILLS</p>
                </div>
                <div className="skills-right">
                    <div>
                        <p>LANGUAGES</p>
                        <ul>
                            <li>JavaScript</li>
                            <li>TypeScript</li>
                            <li>Python</li>
                            <li>Java</li>
                            <li>C++</li>
                            <li>SQL</li>
                        </ul>
                    </div>
                    <div>
                        <p>LIBRARIES</p>
                        <ul>
                            <li>ReactJS</li>
                            <li>Redux</li>
                            <li>Bootstrap</li>
                            <li>Tailwind CSS</li>
                            <li>Jest</li>
                            <li>Node</li>
                            <li>Streamlit</li>
                            <li>Flask</li>
                            <li>Spring Boot</li>





                        </ul>
                    </div>
                    <div>
                        <p>TOOLS</p>
                        <ul>
                            <li>Figma</li>
                            <li>Git</li>
                            <li>Sass</li>
                            <li>Gulp</li>
                            <li>AWS</li>
                            <li>Postman</li> 
                            <li>VS Code</li>
                            <li>Jupyter</li>

                        </ul>
                    </div>
                    <div>
                        <p>AI/ML</p>
                        <ul>
                            <li>Tensorflow</li>
                            <li>Matplotlib</li>
                            <li>NLP</li>
                            <li>Transformers</li>
                            <li>ML algorithms</li>
                            <li>OpenCV</li>
                            <li>LangChain</li>
                            <li>Sagemaker</li>
                            <li>Bedrock</li>



                        </ul>
                    </div>
                </div>
            </div>

            <div className="about-sec fade-in" data-animate='fade-in'>
                <div className="about-left">
                    <p className="gradient-1">EXPERIENCE</p>
                </div>
                <div className="exp-right">
                    <div className="exp">
                        <div className="exp-company-sec">
                            <div className="exp-company-title">SAMSUNG-(Harman)</div>
                            <div className="exp-served">Mar&nbsp; 2022 -Jan 2023 </div>
                        </div>
                        <div>Fullstack Developer, Fulltime</div>
                    </div>

                    <div className="exp">
                        <div className="exp-company-sec">
                            <div className="exp-company-title">FEBA Tech</div>
                            <div className="exp-served">Feb&nbsp; 2020 - Feb&nbsp; 2022</div>
                        </div>
                        <div>Software Developer</div>
                    </div>

                    
                </div>
            </div>
        </div>
        
    )
}

export default AboutMe;