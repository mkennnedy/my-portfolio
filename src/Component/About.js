import React from "react";
import { Link } from "react-router-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import "./Sidebar.css";

function About() {
  const doc1 = `${process.env.PUBLIC_URL}/pdfs/Kennedy.pdf`;
  return (
    <>
      <section id="about" class="about">
        <div class="container">
          <div class="section-title">
            <h2>About</h2>
            <p>
              Magnam dolores commodi suscipit. Necessitatibus eius consequatur
              ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam
              quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea.
              Quia fugiat sit in iste officiis commodi quidem hic quas.
            </p>
          </div>
          <div className="row">
            <div class="col-lg-4" data-aos="fade-right">
              <img src="Images/man3.jpg" class="img-fluid" alt="" />
            </div>
            <div class="col-lg-6 pt-4 pt-lg-0 content" data-aos="fade-left">
              <h3> Web Developer.</h3>
              <div className="about-text">
                <p>
                  A researcher in the education field possesses a strong
                  educational background, typically holding advanced degrees
                  such as a Master's or a Ph.D. in Education or a related
                  discipline. They specialize in specific research interests
                  within the field, which could include curriculum development,
                  educational psychology, assessment and evaluation, educational
                  technology, or special education, among others.
                </p>
                ``
                <p>
                  These researchers are equipped with excellent research skills,
                  enabling them to design and conduct studies, collect and
                  analyze data, and interpret research findings. They are
                  well-versed in various research methodologies and statistical
                  analysis techniques. Their expertise and knowledge contribute
                  to the publication of their work in academic journals and
                  their presentations at conferences, thereby sharing their
                  research findings with the academic community and education
                  practitioners. To support their research endeavors,
                  researchers in education often write grant proposals to secure
                  funding for their projects.
                </p>
                <p>
                  They actively collaborate with other academics, educators,
                  policymakers, and community stakeholders to address research
                  questions and improve educational practices and policies.
                  Furthermore, they may engage in teaching and mentoring
                  activities, offering courses in research methods and
                  supervising graduate students. With the aim of making a
                  positive impact, researchers in education advocate for
                  evidence-based improvements in educational systems.
                </p>
              </div>
            </div>
          </div>
          <div className="heading" style={{ marginTop: "3rem" }}>
            <h5>Please click on the Images below to download the Documents</h5>
          </div>
          <div className="container">
            <div className="row gy-4">
              <div className="col-xl-3 col-md-6 d-flex">
                <a href={doc1} download="Kennedy.pdf">
                  <img src="Images/pdf.jpg" class="img-fluid" alt="" />
                </a>
              </div>

              <div className="col-xl-3 col-md-6 d-flex">
                <img src="Images/pdf1.png" class="img-fluid" alt="" />
              </div>

              <div className="col-xl-3 col-md-6 d-flex">
                <img src="Images/pdf.jpg" class="img-fluid" alt="" />
              </div>

              <div className="col-xl-3 col-md-6 d-flex">
                <img src="Images/pdf1.png" class="img-fluid" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
