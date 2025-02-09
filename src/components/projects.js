import React from "react";
import './project.css'

const Project = () => {
    return (
        <div className="project-wrapper">
            <div className="about-left">
                <p className="gradient-1">FEATURED PROJECTS</p>
            </div>

            <div className="project-container fade-up" data-animate='fade-up'>
                <div className="project-image">
                    <img src={`${require('../assets/Blog.png')}`} alt='blogging-site'></img>
                </div>
                
                <div className="project-details">
                    <p className="project-title">Bekkam Blogs</p>
                    <p>MERN Blog Application with User Authentication and Post Management

                    This project is a full-stack blog application built using the MERN (MongoDB, Express, React, Node.js) stack with user authentication and post management features.

                    The application allows users to create accounts, sign in, create and manage blog posts, and interact with other users' content through comments and likes. It features a responsive design, rich text editing, and image upload capabilities.
</p>
                    <p></p>
                    <div> <br /><hr />
                        <div className="project-skills">
                            <div>React Js</div>
                            <div>JavaScript</div>
                            <div>HTML</div>
                            <div>Flowbite</div>
                            <div>Bcrypt</div>
                            <div>Node Js</div>
                            <div>Express</div>
                            <div>Mongodb</div>
                            <div>Firebase</div>
                        </div>
                </div>
                </div>
                
            </div>

            <div className="project-container fade-up" data-animate='fade-up'>
                <div className="project-image">
                    <img src={`${require('../assets/school.png')}`} alt='youro-web-page'></img>
                </div>
                
                <div className="project-details">
                    <p className="project-title">School Management System</p>
                    <p>This project School Management System, a cutting-edge React application designed to streamline and simplify the management of educational institutions. This comprehensive system features a robust student details module, allowing administrators to easily access and manage student information. With an integrated learning resources section, students and teachers can effortlessly share and access educational materials. The efficient attendance tracking feature ensures accurate monitoring and reporting of student attendance, while the seamless fee payments module provides a hassle-free way for parents to manage and pay school fees, ensuring a smooth financial process for the institution.
                    </p>
                    <div> <br /><hr />
                        <div className="project-skills">
                            <div>React Js</div>
                            <div>TypeScript</div>
                            <div>HTML</div>
                            <div>CSS</div>
                            <div>Redux</div>
                            <div>AWS</div>
                        </div>
                </div>
                </div>
                
            </div>

            <div className="project-container fade-up" data-animate='fade-up'>
                <div className="project-image">
                    <img src={`${require('../assets/rockybot.png')}`} alt='raj-homes-web-page'></img>
                </div>
                <div className="project-details">
                    <p className="project-title">GEN_AI News Tool</p>
                    <p>Gen AI: News Research Tool is a user-friendly application designed to streamline information retrieval from news articles, particularly in the stock market and financial domain. Users can input article URLs or upload text files containing URLs to fetch and process article content using LangChain's UnstructuredURL Loader. The tool constructs embedding vectors using OpenAI's embeddings and leverages FAISS for efficient similarity search, enabling quick retrieval of relevant insights. The application is built with Streamlit, providing an interactive web interface for users to input queries and receive answers along with source URLs. </p>
                    <div> <br /><hr />
                        <div className="project-skills">
                            <div>Python</div>
                            <div>Langchian</div>
                            <div>FAISS</div>
                            <div>OpenAI</div>
                            <div>VectorEmbeddings</div>
                            <div>Tokenization</div>
                            <div>Streamlit</div>

                            

                        </div>
                </div>
                </div>
                
            </div>

            <div className="project-container fade-up" data-animate='fade-up'>
                <div className="project-image">
                    <img src={`${require('../assets/Bgremover.png')}`} alt='simplifyVMS-web-page'></img>
                </div>
                <div className="project-details">
                    <p className="project-title">Gen_AI Image Background Remover</p>
                    <p>This project is Generative AI application that allows users to upload an image and segment it using the Segment Anything Model (SAM). The application is built using Streamlit and leverages PyTorch for model inference</p>
                    <p>Upload an image file (JPG, JPEG, PNG)
                        Specify a point for segmentation or use the center point by default.
                        Display the original and segmented images.
                        User can download the segmented image.</p>
                    <div> <br /><hr />
                        <div className="project-skills">
                            <div>Python</div>
                            <div>Streamlit</div>
                            <div>Numpy</div>
                            <div>PyTorch</div>
                            <div>Segment_anything</div>
                            <div>Pillow</div>
                        </div>
                </div>
                </div>
                
            </div>
        </div>
    )
}

export default Project;