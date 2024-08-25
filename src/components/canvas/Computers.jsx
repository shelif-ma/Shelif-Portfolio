import React, { useEffect, useState } from "react";
import { dashboard } from "../../assets"; // Make sure this points to your image

const Computers = ({ isMobile }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: isMobile ? "300px" : "500px", // Adjust height based on screen size
      }}
    >
      <img
        src={dashboard} // Replace this with the correct path to your image
        alt="Dashboard"
        style={{
          marginTop: 150,
          width: isMobile ? "70%" : "35%",
          height: "auto",
          objectFit: "contain",
        }}
      />
    </div>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Add a listener for changes to the screen size
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    // Set the initial value of the `isMobile` state variable
    setIsMobile(mediaQuery.matches);

    // Define a callback function to handle changes to the media query
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    // Add the callback function as a listener for changes to the media query
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // Remove the listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100%",
      }}
    >
      <Computers isMobile={isMobile} />
    </div>
  );
};

export default ComputersCanvas;
