import { useState } from "react";
import "./App.css"; // Import the CSS file

const generateImageURL = (index) => `/assets/images/pic${index + 1}.png`;
// const generateImageURL = (index) => `../public/images/pic${index + 1}.png`;

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
            src={generateImageURL(selectedButtonIndex)}
            alt={`Image ${selectedButtonIndex + 1}`}
            style={{ margin: "10px", width: "200px", height: "auto" }}
          />
          <p>Image {selectedButtonIndex + 1}</p>
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
