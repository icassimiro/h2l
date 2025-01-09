import { useState, useEffect } from "react";
import { MdKeyboardDoubleArrowUp } from "react-icons/md";

const Scroll = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    });
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {showButton && (
        <button onClick={scrollToTop} className="back-to-top">
          <MdKeyboardDoubleArrowUp className="arrow" />
        </button>
      )}
    </>
  );
};

export default Scroll;