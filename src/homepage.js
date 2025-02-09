import React, { useEffect } from "react";
import "./homepage.css";
import Navbar from "./components/navbar";
import Aboutme from "./components/about";
import Project from "./components/projects";
import Contact from "./components/contact";
import Resume from './assets/ManiResume.pdf'


const Homepage = () => {

    const RevealFunc = (entries) => {
        entries.forEach(entry => {
            if(entry.isIntersecting){
                
                if (entry.target.getAttribute('data-animate') === 'fade-up') entry.target.classList.add('fade-up-show')
                if (entry.target.getAttribute('data-animate') === 'fade-in') entry.target.classList.add('fade-in-show')
            }
        })
    }

    useEffect(() => {

        const options = {
            root: null,
            rootMargin: "0px",
            threshold: 0.5
          };

        var observer = new IntersectionObserver(RevealFunc, options); 
        const elements = document.querySelectorAll(".fade-up")
        const elements2 = document.querySelectorAll(".fade-in")
        elements.forEach((e) => observer.observe(e))
        elements2.forEach((e) => observer.observe(e))

    }, [])

    
    return (
        <div className="page">
            <div className="page-content">
                <Navbar active='home'/>
                <div className="hero-wrapper">

                    <div class="lines">
                        <div class="line"></div>
                        <div class="line"></div>
                        <div class="line"></div>
                        <div class="line"></div>
                        <div class="line"></div>
                    </div>

                    <div style={{zIndex: 1}} className="hero-container">
                    <div class="heading-top-line large"></div>
                        <div className='hero-text-1 fade-up' data-animate="fade-up" style={{transitionDelay: '.2s'}}>
                            Hello, my name is
                        </div>
                        <div className='hero-text-2 fade-up' data-animate='fade-up' style={{transitionDelay: '.3s'}}>
                            MANI VARMA BEKKAM
                        </div>
                        <div className='hero-text-3 gradient-1 fade-up' data-animate='fade-up' style={{transitionDelay: '.4s'}}>
                        FullstackDeveloper & AI Engineer
                        </div>
                        <div className='hero-support-text fade-up' data-animate='fade-up' style={{transitionDelay: '.5s'}}>
                            React front-end developer with extensive 3+ years of experience building websites and web applications using React JS, JavaScript tools/frameworks & CSS. Proficient in architectural design & skilled in responsive layouts. Proficient Knowledge in AI/ML, Data Science, and Cloud Computing technologies.
                        </div>

                        <div style={{display:'flex', alignItems: 'center'}}>
                            
                            {/* <a href={Resume} target="_blank" style={{textDecoration: 'none'}}>
                                <div className='hero-support-text fade-up resume-btn' data-animate='fade-up' 
                                style={{transitionDelay: '.6s', fontWeight: 600}}>Resume</div>
                            </a> */}
                            

                            <div className='hero-support-text fade-up' data-animate='fade-up' style={{transitionDelay: '.6s', fontWeight: 600}}>
                                Get in touch:  <a className="contact-highlight" target='_blank' href={`mailto:${'mbekkam5@gmail.com'}`}>mbekkam5@gmail.com</a>
                            </div>
                        </div>
                    </div>

                    
                </div>
                <Aboutme/>
                <Project />
                <Contact />

            </div>

            <div class="nav-left fade-in" data-animate='fade-in' style={{transitionDelay: '.7s'}}>
                <div class="nav-left-item">
                <div class="copyright nav-email">mbekkam5@gmail.com</div>
                </div>
                <div class="nav-line"></div>
            <div class="nav-left-item nav-copyright"><div class="copyright">©/2024</div></div></div>
        </div>
    )
}

export default Homepage;