import Image from "next/image";
import "@/style/about.css"
import "../style/hero.css";
import { AiFillTikTok } from "react-icons/ai";
import { FaFacebookSquare } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";



function About (){
    return(

        <div className="header-container">
            <div className="header-boxes-container">
                {/*Left */}
                <Image src={"/Images/my_pic.jpeg"}
                width={200}
                height={200}
                className="header-image"
                alt="Profile"/>
                <div className="social-icon">
                    
                <AiFillTikTok className="s-icon"/>
                <FaFacebookSquare className="f-icon"/>
                <AiFillInstagram className="i-icon"/>
                </div>

            <div className="hero-right-dev">
                {/*right */}
                <h1 className="title-hero">About Us
                </h1>
                <p className="des-hero">
                Hi! I'm Rehan Wasim, a programmer with a passion for building efficient, scalable software. Skilled in JavaScript, TypeScript, React, etc. I focus on creating clean, user-friendly solutions that solve real-world problems. I’m committed to continuous learning and enjoy tackling complex challenges. Let’s create something great together!</p>
                <button className="hero-btn">Hire Me</button>
            </div>
            </div>
        </div>
    )
}

export default About;