import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // Import the styles

const DescriptionBox = () => {
  const [value, setValue] = useState('');

  const modules = {
    toolbar: [
      [{ 'bold': true }, { 'italic': true }, { 'underline': true }, { 'strike': true }], // Bold, Italics, Underline, Strikethrough
      [{ 'list': 'ordered' }, { 'list': 'bullet' }], // Ordered/Unordered list
      [{ 'align': [] }], // Text alignment
      ['link'], // Link
    ]
  };

  return (
    <div>
      <ReactQuill
        value={value}
        onChange={setValue}
        modules={modules}
        placeholder="Write something amazing..."
      />
    </div>
  );
};

export default DescriptionBox;
