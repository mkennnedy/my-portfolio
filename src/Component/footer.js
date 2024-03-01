import React from "react";
function Footer() {
  return (
    <footer id="footer" class="relative-bottom">
      <div className="container">
        <div className="row d-flex align-items-center">
          <div className="col-lg-6 text-lg-left text-center">
            <div className="copyright">
              &copy; Copyright <strong>Mang'eni</strong>. All Rights Reserved
            </div>
            <div className="credits">
              Designed by{"Kennedy "}
              <a href="https://bootstrapmade.com/">BootstrapMade</a>
            </div>
          </div>
          <div className="col-lg-6">
            <nav className="footer-links text-lg-right text-center pt-2 pt-lg-0">
              <a href="#intro" className="scrollto">
                Home
              </a>
              <a href="#about" className="scrollto">
                About
              </a>
              <a href="#services" className="scrollto">
                Services
              </a>
              <a href="#">Terms of Use</a>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
