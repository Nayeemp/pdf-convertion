/* eslint-disable react/button-has-type */
/* eslint-disable new-cap */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable max-len */
import { jsPDF } from 'jspdf';
import React from 'react';

function PdfConvertion() {
  const convertPDFHandler = () => {
    // Default export is a4 paper, portrait, using millimeters for units
    const doc = new jsPDF();
    console.log('doc', doc);

    doc.text('Hello world!', 10, 10);
    // "Hello world!" হচ্ছে পিডিএফ এর জন্য একটি value, 10 দ্বারা বোঝানো হচ্ছে "Hello world!" text এর অবস্থান হবে  x -axis (x-coordinate) থেকে 10 millimeters দূরে,
    // পরের 10 দ্বারা বোঝানো হচ্ছে y-axis (y-coordinate) থেকে 10 millimeters দূরে "Hello world!" text এর অবস্থান হবে

    doc.save('name.pdf');// name of pdf
  }

  return (
    <div className="p-5">
      <button onClick={convertPDFHandler}>Convert PDF</button>
    </div>
  );
}

export default PdfConvertion;
