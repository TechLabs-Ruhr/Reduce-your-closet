import { useState } from "react";

const UploadImage = () => {

  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="Upload">
      <h4> Upload Image </h4>
      {selectedImage && (
        <div>
          <img
            alt="not found"
            width={"250px"}
            src={URL.createObjectURL(selectedImage)}
          />
      </div>
      )}
      
      <input
        type="file"
        name="myImage"
        onChange={(event) => {
          console.log(event.target.files[0]);
          setSelectedImage(event.target.files[0]);
        }}
      />
    </div>
  );
};

export default UploadImage;