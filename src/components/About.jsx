import "../styles/about.css"
import Button from "./Button";

function About() {
    return (
        <>
            <div className="about">
                <div className="about-container">
                    <div className="about-heading">
                        <h2>Becuase <span>every</span> story matters</h2>
                    </div>
                    <div className="about-content">
                        <div className="about-content-text">
                            <h3>In my <span>own words</span></h3>
                            <p>I bring stories to life through voice. 

With a background in media production from Goldsmiths, University of London and over 10 years of voice acting experience, I specialise in full-cast audio dramas, writing, producing and performing work that immerses audiences in unforgettable worlds. 

As a voice actor, I’ve built a reputation for delivering authentic, engaging performances that connect with listeners. From shaping complex characters to driving narrative pace, I understand how voice and sound design work together to create compelling audio experiences.

Whether behind the mic or behind the script, I combine creative storytelling with technical expertise, ensuring every project resonates, entertains and endures.</p>
                        </div>
                        <Button />
                    </div>
                    <div className="about-content-img">
                        <img src="/public/Assets/Leo_Cosh_Header_Image.JPG" alt="" />
                    </div>
                </div>
        </div>
        </>
    )
}

export default About;