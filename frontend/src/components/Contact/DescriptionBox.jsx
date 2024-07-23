import React, { useEffect, useRef } from 'react';
import './DescriptionBox.css';

const DescriptionBox = () => {
  const textareaRef = useRef(null);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Backspace') {
        const textarea = textareaRef.current;
        if (textarea.selectionStart > 0 || textarea.selectionEnd > 0) {
          event.preventDefault(); // Prevent default backspace behavior
          const { selectionStart, selectionEnd, value } = textarea;
          textarea.value = value.slice(0, selectionStart - 1) + value.slice(selectionEnd);
          textarea.setSelectionRange(selectionStart - 1, selectionStart - 1);
        }
      }
    };

    const textareaElement = textareaRef.current;
    if (textareaElement) {
      textareaElement.addEventListener('keydown', handleKeyDown);
    }

    // Clean up the event listener on component unmount
    return () => {
      if (textareaElement) {
        textareaElement.removeEventListener('keydown', handleKeyDown);
      }
    };
  }, []);

  return (
    <div className="">
      <textarea
        id="description"
        ref={textareaRef}
        className="description-box"
        placeholder="Enter your description here..."
      />
      <label htmlFor="description"></label>
    </div>
  );
};

export default DescriptionBox;
