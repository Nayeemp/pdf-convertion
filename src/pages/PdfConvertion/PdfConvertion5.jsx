/* eslint-disable react/button-has-type */
/* eslint-disable new-cap */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable max-len */
import { jsPDF } from 'jspdf';
import autoTable from 'jspdf-autotable';
import React from 'react';

function PdfConvertion() {
  const convertPDFHandler = () => {
    const doc = new jsPDF({
      orientation: 'p',
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

    doc.save('name.pdf');// name of pdf
  }

  return (
    <div className="p-5">
      <button onClick={convertPDFHandler}>Convert PDF</button>
    </div>
  );
}

export default PdfConvertion;
