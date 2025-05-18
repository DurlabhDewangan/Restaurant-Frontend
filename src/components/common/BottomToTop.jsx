import React, { useState, useEffect } from "react";

const BackToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const backToTopBtn = document.getElementById("backToTop");

    const onScroll = () => {
      if (window.pageYOffset > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", onScroll);

    // Clean up listener on unmount
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <a
      href="#"
      id="backToTop"
      className={`back-to-top fixed bottom-8 right-8 text-white p-4 rounded-full shadow-lg transition-colors z-50 ${
        visible ? "visible" : ""
      }`}
      aria-label="Back to top"
      onClick={scrollToTop}
   
    >
      <i className="fas fa-arrow-up"></i>
    </a>
  );
};

export default BackToTop;

