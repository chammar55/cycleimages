import { useState } from "react";
import "./App.css"; // Import the CSS file

import image1 from "./assets/images/pic1.png";
import image2 from "./assets/images/pic2.png";
import image3 from "./assets/images/pic3.png";
import image4 from "./assets/images/pic4.png";
import image5 from "./assets/images/pic5.png";

const images = [image1, image2, image3, image4, image5];

function App() {
  const [selectedButtonIndex, setSelectedButtonIndex] = useState(null);

  // Handle button click to set the selected button index
  const handleButtonClick = (index) => {
    setSelectedButtonIndex(index);
  };

  return (
    <>
      {selectedButtonIndex !== null && (
        <div>
          <img
            src={images[selectedButtonIndex % 5]}
            alt={`Image ${selectedButtonIndex + 1}`}
            style={{ margin: "10px", width: "200px", height: "auto" }}
          />
          <p>image {selectedButtonIndex + 1}</p>
        </div>
      )}
      <div className="container">
        <div className="button-container">
          {Array.from({ length: 50 }, (_, index) => (
            <button
              key={index}
              className={`button button-${(index % 5) + 1}`} // Apply class dynamically
              onClick={() => handleButtonClick(index)}
            >
              Button {index + 1}
            </button>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
