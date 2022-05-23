import React from 'react';

function Resume () {
  return (
    <div className='resume-container mt-5'>
        <object data="../../../assets/resume.pdf" 
            type="application/pdf"
            height='750vh'
            width='100%'>
            <div className='resume-container'>
                <p>No online PDF viewer installed 😕</p>
                <a 
                  href="./assets/resume.pdf" 
                  target="_blank">
                      Click here to view in a new tab.
                </a>
                <p><a 
                  href="https://docs.google.com/document/d/1zPfYoFmWi8MH51JVWEdrJSeHkCDF-Z-SmisvIQm5slQ/edit?usp=sharing" 
                  target='blank'>
                      Or here to view in google drive.
                </a></p>
            </div>
        </object>
    </div>
  );
}

export default Resume;