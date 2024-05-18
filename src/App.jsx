import { useState } from "react";
import "./App.css"; // Import the CSS file

import image1 from "./assets/images/pic1.png";
import image2 from "./assets/images/pic2.png";
import image3 from "./assets/images/pic3.png";
import image4 from "./assets/images/pic4.png";
import image5 from "./assets/images/pic5.png";
import image6 from "./assets/images/pic6.png";
import image7 from "./assets/images/pic7.png";
import image8 from "./assets/images/pic8.png";
import image9 from "./assets/images/pic9.png";
import image10 from "./assets/images/pic10.png";
import image11 from "./assets/images/pic11.png";
import image12 from "./assets/images/pic12.png";
import image13 from "./assets/images/pic13.png";
import image14 from "./assets/images/pic14.png";
import image15 from "./assets/images/pic15.png";
import image16 from "./assets/images/pic16.png";
import image17 from "./assets/images/pic17.png";
import image18 from "./assets/images/pic18.png";
import image19 from "./assets/images/pic19.png";
import image20 from "./assets/images/pic20.png";
import image21 from "./assets/images/pic21.png";
import image22 from "./assets/images/pic22.png";
import image23 from "./assets/images/pic23.png";
import image24 from "./assets/images/pic24.png";
import image25 from "./assets/images/pic25.png";
import image26 from "./assets/images/pic26.png";
import image27 from "./assets/images/pic27.png";
import image28 from "./assets/images/pic28.png";
import image29 from "./assets/images/pic29.png";
import image30 from "./assets/images/pic30.png";

const images = [
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
  image8,
  image9,
  image10,
  image11,
  image12,
  image13,
  image14,
  image15,
  image16,
  image17,
  image18,
  image19,
  image20,
  image21,
  image22,
  image23,
  image24,
  image25,
  image26,
  image27,
  image28,
  image29,
  image30,
];

function App() {
  const [selectedButtonIndex, setSelectedButtonIndex] = useState(0);

  // Handle button click to set the selected button index
  const handleButtonClick = (index) => {
    setSelectedButtonIndex(index);
  };

  return (
    <>
      {selectedButtonIndex !== null && (
        <div>
          <img
            src={images[selectedButtonIndex]}
            alt={`Image ${selectedButtonIndex + 1}`}
            style={{ margin: "10px", width: "200px", height: "auto" }}
          />
          <p>image {selectedButtonIndex + 1}</p>
        </div>
      )}
      <div className="container">
        <div className="button-container">
          {Array.from({ length: 30 }, (_, index) => (
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
