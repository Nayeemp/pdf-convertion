/* eslint-disable no-unused-vars */
/* eslint-disable no-plusplus */
/* eslint-disable react/button-has-type */
/* eslint-disable new-cap */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable max-len */
import { jsPDF } from 'jspdf';
import autoTable from 'jspdf-autotable';
import React from 'react';

const addPageNumber = (doc) => {
  for (let i = 1; i <= doc.internal.getNumberOfPages(); i++) {
    console.log('i = ', i);
    doc.setPage(i);
    doc.text(`Page ${i}`, 14, doc.internal.pageSize.height - 10);
  }
}

const convertPDFHandler = () => {
  const doc = new jsPDF({
    orientation: 'l',
    format: 'a4'
  });
  //   p = portrait

  autoTable(doc, {
    head: [['Name', 'Email', 'Country']],
    body: [
      ['David', 'david@example.com', 'Sweden'],
      ['Castille', 'castille@example.com', 'Spain'],

      ['David', 'david@example.com', 'Sweden'],
      ['Castille', 'castille@example.com', 'Spain'],

      ['David', 'david@example.com', 'Sweden'],
      ['Castille', 'castille@example.com', 'Spain'],

      ['David', 'david@example.com', 'Sweden'],
      ['Castille', 'castille@example.com', 'Spain'],

      ['David', 'david@example.com', 'Sweden'],
      ['Castille', 'castille@example.com', 'Spain'],

      ['David', 'david@example.com', 'Sweden'],
      ['Castille', 'castille@example.com', 'Spain'],

      ['David', 'david@example.com', 'Sweden'],
      ['Castille', 'castille@example.com', 'Spain'],

      ['David', 'david@example.com', 'Sweden'],
      ['Castille', 'castille@example.com', 'Spain'],

      ['David', 'david@example.com', 'Sweden'],
      ['Castille', 'castille@example.com', 'Spain'],

      ['David', 'david@example.com', 'Sweden'],
      ['Castille', 'castille@example.com', 'Spain'],

      ['David', 'david@example.com', 'Sweden'],
      ['Castille', 'castille@example.com', 'Spain'],

      ['David', 'david@example.com', 'Sweden'],
      ['Castille', 'castille@example.com', 'Spain'],

      ['David', 'david@example.com', 'Sweden'],
      ['Castille', 'castille@example.com', 'Spain'],

      ['David', 'david@example.com', 'Sweden'],
      ['Castille', 'castille@example.com', 'Spain'],

      ['David', 'david@example.com', 'Sweden'],
      ['Castille', 'castille@example.com', 'Spain'],

      ['David', 'david@example.com', 'Sweden'],
      ['Castille', 'castille@example.com', 'Spain'],

      ['David', 'david@example.com', 'Sweden'],
      ['Castille', 'castille@example.com', 'Spain'],

      ['David', 'david@example.com', 'Sweden'],
      ['Castille', 'castille@example.com', 'Spain'],

      ['David', 'david@example.com', 'Sweden'],
      ['Castille', 'castille@example.com', 'Spain'],

      ['David', 'david@example.com', 'Sweden'],
      ['Castille', 'castille@example.com', 'Spain'],

      ['David', 'david@example.com', 'Sweden'],
      ['Castille', 'castille@example.com', 'Spain'],

      ['David', 'david@example.com', 'Sweden'],
      ['Castille', 'castille@example.com', 'Spain'],

      ['David', 'david@example.com', 'Sweden'],
      ['Castille', 'castille@example.com', 'Spain'],

      ['David', 'david@example.com', 'Sweden'],
      ['Castille', 'castille@example.com', 'Spain']
    ],
    theme: 'grid'
  })

  addPageNumber(doc);

  doc.save('name.pdf');// name of pdf
}

function PdfConvertion() {
  return (
    <div className="p-5">
      <button onClick={convertPDFHandler}>Convert PDF</button>
    </div>
  );
}

export default PdfConvertion;
