import image from "../Assets/Leo_Cosh_Header_Image.JPG";

function ImageDiv() {
  return (
    <>
      <div className="image-div">
        <div className="image-div-container">
          <div className="image-div-container-content">
            <img
              className="leo-cosh-header-img"
              src={image}
              alt="Voice over artist, Leo Cosh with curly hair and glasses, wearing a dark sweater, stands by a window with a calm expression. Soft natural light creates a serene mood."
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default ImageDiv;
