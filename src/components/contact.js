import React from "react";
import './contact.css'

const Contact = () => {
    return (
        <div className="contact">
            Designed and developed by Mani varma Bekkam
            <div class="social-icons-btn">
            <a class="icons mail" target="_blank"  href={`mailto:${'mbekkam5@gmail.com'}`}>
                <ion-icon name="mail-outline"></ion-icon>
            </a>
            <a class="icons github" target="_blank" href="https://github.com/manivarmabekkam">
                <ion-icon name="logo-github"></ion-icon>
            </a>
            <a class="icons instagram" target="_blank" href="#">
                <ion-icon name="logo-instagram"></ion-icon>
            </a>
            <a class="icons linkedin" target="_blank" href="https://www.linkedin.com/in/bekkam-manivarma-16b594174/">
                <ion-icon name="logo-linkedin"></ion-icon>
            </a>
            </div>
        </div>
    )
}

export default Contact