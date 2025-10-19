import Button from "./Button"
import AudioPlayer from "./AudioPlayer";
import "../styles/demo.css"


function Demo() {
    return (
        <>
            <div className="demo">
                <div className="demo-container">
                    <div className="demo-container-content">
                        <div className="demo-container-content-heading">
                            <h2><span>Press play</span> - and let's create something together</h2>
                        </div>
                       
                          <AudioPlayer
        src="/Assets/Leo Cosh Commercial Demo 2025.mp3"
        title="Commercial Demo 2025"
      />
                        <div className="demo-container-content-subheadings">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, voluptate?</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, voluptate?</p>
                        </div> 
                        <div className="demo-container-content-cta">
                            <Button />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Demo