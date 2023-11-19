/* eslint-disable react/button-has-type */
/* eslint-disable new-cap */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable max-len */
import { jsPDF } from 'jspdf';
import React from 'react';

function PdfConvertion() {
  const convertPDFHandler = () => {
    const doc = new jsPDF({
      orientation: 'p',
      unit: 'mm'
    });

    // p = portrait
    // mm = millimeters

    const pageWidth = doc.internal.pageSize.width;
    const pageWidth2 = doc.internal.pageSize.getWidth();

    console.log('page width =', pageWidth);
    console.log('page width2 =', pageWidth2);

    const title = 'Hello world!';
    const titleWidth = doc.getTextDimensions(title).w;
    console.log('title =', titleWidth);

    const x = (pageWidth - titleWidth) / 2;
    doc.text(title, x, 14);
    doc.save('name.pdf');// name of pdf
  }

  return (
    <div className="p-5">
      <button onClick={convertPDFHandler}>Convert PDF</button>
    </div>
  );
}

export default PdfConvertion;
