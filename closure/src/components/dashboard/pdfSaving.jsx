import React from 'react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

const pxToMm = (px) => {
  return Math.floor(px / document.getElementById('myMm').offsetHeight);
};

const mmToPx = (mm) => {
  return document.getElementById('myMm').offsetHeight * mm;
};

const range = (start, end) => {
  return Array(end - start).join(0).split(0).map(function (val, id) {
    return id + start;
  });
};

const PrintButton = ({ id, label }) => (
  <div className="tc mb4 mt2">
    {/*
      Getting pixel height in milimeters:
      https://stackoverflow.com/questions/7650413/pixel-to-mm-equation/27111621#27111621
    */}
    <div id="myMm" style={{ height: '1mm' }} />

    <div
      className="pa2 ba bw1 b--black bg-yellow black-90 br2 dib pointer dim shadow-1"
      onClick={() => {
        const input = document.getElementById(id);
        const inputHeightMm = pxToMm(input.offsetHeight);
        const inputWidthMm = pxToMm(input.offsetWidth); // New line
        const a4WidthMm = 297;
        const a4HeightMm = 210;
        const a4HeightPx = mmToPx(a4HeightMm);
        const numPages = Math.ceil(inputHeightMm / a4HeightMm); // Updated calculation
        console.log({
          input,
          inputHeightMm,
          a4HeightMm,
          a4HeightPx,
          numPages,
          range: range(0, numPages),
          comp: inputHeightMm <= a4HeightMm,
          inputHeightPx: input.offsetHeight,
        });

        let pdf;

        html2canvas(input, { scale: 0.85 }).then((canvas) => {
          const imgData = canvas.toDataURL('image/png');

          // Document of inputWidthMm wide and inputHeightMm high
          if (inputHeightMm > a4HeightMm) {
            // elongated a4 (system print dialog will handle page breaks)
            pdf = new jsPDF('l', 'mm', [inputWidthMm, inputHeightMm + 16]); // Updated dimensions
          } else {
            // standard a4
            pdf = new jsPDF('l', 'mm', [inputWidthMm, a4HeightMm]); // Updated dimensions
          }

          pdf.addImage(imgData, 'PNG', 0, 0);

          pdf.save(`${id}.pdf`);
        });
      }}
    >
      <div className='export-text'>{label}</div>
    </div>
  </div>
);

export default PrintButton;
