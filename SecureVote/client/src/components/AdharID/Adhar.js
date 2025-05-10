import React, { useState } from "react";
import { Heading } from "../../globalStyles";
import { IconContext } from "react-icons/lib";
import "./Adhar.css"; // Assuming Adhar.css contains your styles

import { Link } from "react-router-dom";
import UploadImg from "./Untitled.jpeg";

import {
  FaceSection,
  FaceWrapper,
  FaceContainer,
  FaceCardInfo,
  FaceCard,
  FaceCardCost,
} from "./AdharStyle";

import Particle2 from "../Particle2";

function Adhar() {
  const [image, setImage] = useState(null);
  const [back, setBack] = useState(null);

  const onChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
  };

  const onChangeBack = (e) => {
    const file = e.target.files[0];
    setBack(file);
  };

  const handleUpload1 = () => {
    console.log("Uploading Image 1...");
    // Code to upload Image 1 goes here
  };

  const handleUpload2 = () => {
    console.log("Uploading Image 2...");
    // Code to upload Image 2 goes here
  };

  return (
    <IconContext.Provider value={{ color: "#a9b3c1", size: "1rem" }}>
      <Particle2 />
      <FaceSection id="Face">
        <FaceWrapper>
          <Heading>Adhaar Card Verification</Heading>
          <br />
          <FaceContainer>
            {/* Front */}
            <FaceCard>
              <FaceCardInfo>
                <div className="divv">
                  <FaceCardCost>FRONT</FaceCardCost>
                  <div>
                  <h2>Upload Image 1</h2>
                  <input type="file" id="frontFile" onChange={onChange} />
                  <button onClick={handleUpload1}>Upload</button>
                  {image && (
                    <img
                      className="uploaded"
                      src={URL.createObjectURL(image)}
                      alt="front preview"
                      style={{ maxWidth: "300px", maxHeight: "300px" }} 
                    />
                  )}
                  </div>
                </div>
              </FaceCardInfo>
            </FaceCard>
            {/* Back */}
            <FaceCard>
              <FaceCardInfo>
                <div className="divv">
                  <FaceCardCost>BACK</FaceCardCost>
                  <div>
                  <h2>Upload Image 2</h2>
                  <input type="file" id="backFile" onChange={onChangeBack} />
                  <button onClick={handleUpload2}>Upload</button>
                  {back && (
                    <img
                      className="uploaded"
                      src={URL.createObjectURL(back)}
                      alt="back preview"
                      style={{ maxWidth: "300px", maxHeight: "300px" }} 
                    />
                  )}
                  </div>
                </div>
              </FaceCardInfo>
            </FaceCard>
          </FaceContainer>
          <br />




















<br />
<br /> <br /> <br />
 
        <Link to="/pricing">
          <div className="btn-div">
            <button className="btn-17">
              <span className="text-container">
                <span className="text">Proceed</span>
              </span>
            </button>
          </div>
        </Link>
        </FaceWrapper>
      </FaceSection>
    </IconContext.Provider>
  );
}

export default Adhar;
