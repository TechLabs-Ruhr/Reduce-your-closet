import { useState } from "react";

const UploadImage = () => {

  const [selectedImage, setSelectedImage] = useState<File | null>(null);

  //Upload Image fuction, which is part of Add Item Form
  //Would be cool if pictutes could be added and displayed in MY CLOSET
  //HTTP POST(!?) Request Method

  return (
    <div className="Upload">
      <h4> Upload Image </h4>
          {/* SELECTED IMG DISPLAYER */}
      {selectedImage && (
        <div>
          <img
            alt="not found"
            width={"250px"}
            src={URL.createObjectURL(selectedImage)}
          />
      </div>
      )}

         {/* SELECT IMG INPUT */}
      <input
        type="file"
        name="myImage"
        onChange={(event) => {
          if (!event.target.files) return;
          console.log(event.target.files[0]);
          setSelectedImage(event.target.files[0]);
        }}
      />
    </div>
  );
};

export default UploadImage;