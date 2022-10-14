import React from "react";
import "./button.css";

const Button = ({ label, darkMode, setDarkMode }) => {
  return (
    <div className="container">
      <input
        type="checkbox"
        id="toggle_checkbox"
        onChange={() => setDarkMode(!darkMode)}
      />
      <label for="toggle_checkbox">
        <div id="star">
          <div class="star" id="star-1">
            ★
          </div>
          <div class="star" id="star-2">
            ★
          </div>
        </div>
        <div id="moon"></div>
      </label>
    </div>
  );
};

export default Button;
