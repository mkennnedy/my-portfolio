import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";
import Footer from "./footer";

function Sidebar() {
  const [activeLink, setActiveLink] = useState(null);

  const handleLinkClick = (index) => {
    setActiveLink(index);
  };
  return (
    <>
      <header id="header">
        <div class="d-flex flex-column">
          <div class="profile">
            <img
              src="assets/img/profile-img.jpg"
              alt=""
              class="img-fluid rounded-circle"
            />
            <h1 class="text-light">
              <a href="index.html">David Kunyu</a>
            </h1>
            <div class="social-links mt-3 text-center">
              <a href="#" class="twitter">
                <i class="bi bi-twitter-x"></i>
              </a>
              <a href="#" class="researchgate">
                <i class="fab fa-researchgate fa-inverse"></i>
              </a>

              <a href="#" class="linkedin">
                <i class="bx bxl-linkedin"></i>
              </a>
            </div>
          </div>
          <nav id="navbar" class="nav-menu navbar">
            <ul>
              <li>
                <Link
                  to="/"
                  className={
                    activeLink === 8 ? "sidebar-link active" : "sidebar-link"
                  }
                  onClick={() => handleLinkClick(8)}
                >
                  About
                </Link>
              </li>

              <li>
                <Link
                  to="publication"
                  className={
                    activeLink === 7 ? "sidebar-link active" : "sidebar-link"
                  }
                  onClick={() => handleLinkClick(7)}
                >
                  Publication
                </Link>
              </li>
              <li>
                <Link
                  to="/education"
                  className={
                    activeLink === 1 ? "sidebar-link active" : "sidebar-link"
                  }
                  onClick={() => handleLinkClick(1)}
                >
                  Education
                </Link>
              </li>
              <li>
                <Link
                  to="/teaching"
                  className={
                    activeLink === 2 ? "sidebar-link active" : "sidebar-link"
                  }
                  onClick={() => handleLinkClick(2)}
                >
                  Teaching & Evaluations
                </Link>
              </li>
              <li>
                <Link
                  to="cv"
                  className={
                    activeLink === 3 ? "sidebar-link active" : "sidebar-link"
                  }
                  onClick={() => handleLinkClick(3)}
                >
                  Cv
                </Link>
              </li>
              <li>
                <Link
                  to="blog"
                  className={
                    activeLink === 4 ? "sidebar-link active" : "sidebar-link"
                  }
                  onClick={() => handleLinkClick(4)}
                >
                  Personal Blog
                </Link>
              </li>
              <li>
                <Link
                  to="contact"
                  className={
                    activeLink === 5 ? "sidebar-link active" : "sidebar-link"
                  }
                  onClick={() => handleLinkClick(5)}
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  to="artistic"
                  className={
                    activeLink === 6 ? "sidebar-link active" : "sidebar-link"
                  }
                  onClick={() => handleLinkClick(6)}
                >
                  Artistic Work
                </Link>
              </li>
            </ul>
          </nav>
        </div>{" "}
      </header>
      <i class="bi bi-list mobile-nav-toggle d-xl-none"></i>
    </>
  );
}

export default Sidebar;
