import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import image1 from "./assets/images/pic1.png";
import image2 from "./assets/images/pic2.png";
import image3 from "./assets/images/pic3.png";

const images = [image1, image2, image3];

const buttonStyles = [
  {
    backgroundColor: "blue",
    color: "white",
    padding: "10px 20px",
    margin: "10px",
    border: "none",
    borderRadius: "5px",
  },
  {
    backgroundColor: "red",
    color: "white",
    padding: "10px 20px",
    margin: "10px",
    border: "none",
    borderRadius: "5px",
  },
  {
    backgroundColor: "black",
    color: "white",
    padding: "10px 20px",
    margin: "10px",
    border: "none",
    borderRadius: "5px",
  },
];

function App() {
  const [selectedButtonIndex, setSelectedButtonIndex] = useState(0);

  // Handle button click to set the selected button index
  const handleButtonClick = (index) => {
    setSelectedButtonIndex(index);
  };

  return (
    <>
      <div style={{ textAlign: "center" }}>
        <div
          style={{ display: "flex", justifyContent: "center", margin: "20px" }}
        >
          {buttonStyles.map((style, index) => (
            <button
              key={index}
              style={style}
              onClick={() => handleButtonClick(index)}
            >
              Button {index + 1}
            </button>
          ))}
        </div>
        {selectedButtonIndex !== null && (
          <div>
            <img
              src={images[selectedButtonIndex]}
              alt={`Image ${selectedButtonIndex + 1}`}
              style={{ margin: "10px", width: "200px", height: "auto" }}
            />
          </div>
        )}
      </div>
    </>
  );
}

export default App;
