
import React from 'react';



const Cv = () => {
  const pdfUrl = `${process.env.PUBLIC_URL}/pdfs/Kennedy.pdf`;
    

  return (
      <div className="container" id="container">
      <div className="row">
        <div className="col-12">
          <div
            className="breadcrumbs d-flex align-items-center"
            style={{ backgroundImage: "url('./Images/blog.jpg')" }}
          >
            <div className="container position-relative d-flex flex-column align-items-center">
              <h2>Publication</h2>
              <ol>
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">Publications</a>
                </li>
              </ol>
            </div>
          </div>
        </div>
        </div>
        <div className='row'>
        <h6>Click to download My Cv</h6 >
        <a href={pdfUrl} download="Kennedy.pdf">
          Download
        </a>
        
        <a href="pdfs/Kennedy.pdf" target="_blank" rel="noopener noreferrer">
        Read
      </a>
      </div>
      </div>
    
  );
};

export default Cv;
