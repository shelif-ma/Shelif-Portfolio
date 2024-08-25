import React from "react";
import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Tech = () => {
  // Calculate the duration based on the number of items and desired speed
  const duration = technologies.length * 2; // Adjust this value to control speed

  return (
    <div style={{ width: "100%", overflow: "hidden" }}>
      <motion.div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "20px",
          width: "200%", // Enough width to allow smooth scrolling
        }}
        animate={{ x: ["0%", "-50%"] }} // Scroll from 0% to -50% of the width
        transition={{
          ease: "linear",
          duration: duration, // Total duration of the scroll
          repeat: Infinity, // Repeat infinitely
        }}
      >
        {[...technologies, ...technologies].map((technology, index) => (
          <div
            key={index}
            style={{
              width: "200%",
              height: "200%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img
              src={technology.icon}
              alt={`Technology icon ${index}`}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Tech;
