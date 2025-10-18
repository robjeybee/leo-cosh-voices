import "../styles/demo.css"
import Button from "./Button";

function Demo() {
    return (
        <>
            <div className="demo">
                <div className="demo-container">
                    <div className="demo-container-content">
                             <div className="demo-container-title">
                    <h2><span>Press play</span> — and let's create
                    
                        <br />
                    something amazing together</h2>
                    </div>
                    <div className="demo-container-demoreel">
                        <audio 
            src="/Assets/Leo Cosh Commercial Demo 2025.mp3" 
            controls
            preload="none"
          >
            Your browser does not support the audio element.
          </audio>
                    </div>
                      <div className="demo-container-subtitle">
                    <p>If your brand, film, or campaign isn't connecting,
                        <br />it's not your message — it's how it's told.</p>
                    <p>I bring warmth, clarity, and presence that makes
<br />people lean in and stay engaged.</p>
                </div>
                <Button />
                    </div>
               
                    
                </div>
              
            </div>
        </>
    )
}

export default Demo;