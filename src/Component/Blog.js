import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Blog.css";
import { Link } from "react-router-dom";

const Blog = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 10000,
    buttontoshow: false,
    responsive: [
      {
        breakpoint: 768, // Adjust breakpoint as needed
        settings: {
          slidesToShow: 1, // Show 1 card on smaller screens (e.g., phones)
        },
      },
    ],
  };

  return (
    <div id="Main" className="about">
      <section id="hero-slider" className="hero-slider">
        <div className="container-md" data-aos="fade-in">
          <div className="row">
            <div className="col-12">
              <div className="swiper sliderFeaturedPosts">
                <div className="swiper-wrapper">
                  <Slider {...settings}>
                    <div className="swiper-slide">
                      <a
                        href="single-post.html"
                        className="img-bg d-flex align-items-end"
                        style={{
                          backgroundImage: "url('Images/Blog3.jpg')",
                          padding: "5px",
                        }}
                      >
                        <div className="img-bg-inner">
                          <h2>
                            The Best Homemade Masks for Face (keep the Pimples
                            Away)
                          </h2>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Quidem neque est mollitia! Beatae minima
                            assumenda repellat harum vero, officiis ipsam magnam
                            obcaecati cumque maxime inventore repudiandae quidem
                            necessitatibus rem atque.
                          </p>
                        </div>
                      </a>
                    </div>
                    <div className="swiper-slide">
                      <a
                        href="single-post.html"
                        className="img-bg d-flex align-items-end"
                        style={{
                          backgroundImage: "url('Images/image.jpeg')",
                        }}
                      >
                        <div className="img-bg-inner">
                          <h2>
                            The Best Homemade Masks for Face (keep the Pimples
                            Away)
                          </h2>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Quidem neque est mollitia! Beatae minima
                            assumenda repellat harum vero, officiis ipsam magnam
                            obcaecati cumque maxime inventore repudiandae quidem
                            necessitatibus rem atque.
                          </p>
                        </div>
                      </a>
                    </div>
                    <div className="swiper-slide">
                      <a
                        href="single-post.html"
                        className="img-bg d-flex align-items-end"
                        style={{
                          backgroundImage: "url('Images/image.jpeg')",
                        }}
                      >
                        <div className="img-bg-inner">
                          <h2>
                            The Best Homemade Masks for Face (keep the Pimples
                            Away)
                          </h2>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Quidem neque est mollitia! Beatae minima
                            assumenda repellat harum vero, officiis ipsam magnam
                            obcaecati cumque maxime inventore repudiandae quidem
                            necessitatibus rem atque.
                          </p>
                        </div>
                      </a>
                    </div>
                    <div className="swiper-slide">
                      <a
                        href="single-post.html"
                        className="img-bg d-flex align-items-end"
                        style={{
                          backgroundImage: "url('Images/blog4.jpg')",
                        }}
                      >
                        <div className="img-bg-inner">
                          <h2>
                            The Best Homemade Masks for Face (keep the Pimples
                            Away)
                          </h2>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Quidem neque est mollitia! Beatae minima
                            assumenda repellat harum vero, officiis ipsam magnam
                            obcaecati cumque maxime inventore repudiandae quidem
                            necessitatibus rem atque.
                          </p>
                        </div>
                      </a>
                    </div>
                    {/* Other swiper-slide elements */}
                  </Slider>
                </div>
                <div className="custom-swiper-button-next">
                  <span className="bi-chevron-right"></span>
                </div>
                <div className="custom-swiper-button-prev">
                  <span className="bi-chevron-left"></span>
                </div>

                <div className="swiper-pagination"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="posts" className="posts">
        <div className="container" data-aos="fade-up">
          <div className="row g-5">
            <div className="col-lg-4">
              <div className="post-entry-1 lg">
                <a href="single-post.html">
                  <img src="Images/blog4.jpg" alt="" className="img-fluid" />
                </a>
                <div className="post-meta">
                  <span className="date">Culture</span>{" "}
                  <span className="mx-1">&bullet;</span>{" "}
                  <span>Jul 5th '22</span>
                </div>
                <h2>
                  <Link to="/Blog1">My First Blog</Link>
                </h2>
                <p className="mb-4 d-block">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero
                  temporibus repudiandae, inventore pariatur numquam cumque
                  possimus exercitationem? Nihil tempore odit ab minus eveniet
                  praesentium, similique blanditiis molestiae ut saepe
                  perspiciatis officia nemo, eos quae cumque. Accusamus fugiat
                  architecto rerum animi atque eveniet, quo, praesentium
                  dignissimos
                </p>

                <div className="d-flex align-items-center author">
                  <div className="photo">
                    <img
                      src="assets/img/person-1.jpg"
                      alt=""
                      className="img-fluid"
                    />
                  </div>
                  <div className="name">
                    <h3 className="m-0 p-0">Mang'eni Kennedy</h3>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-8">
              <div class="row g-5">
                <div class="col-lg-4 border-start custom-border">
                  <div class="post-entry-1">
                    <a href="single-post.html">
                      <img src="Images/blog1.jpg" alt="" class="img-fluid" />
                    </a>
                    <div class="post-meta">
                      <span class="date">Sport</span>{" "}
                      <span class="mx-1">&bullet;</span>{" "}
                      <span>Jul 5th '22</span>
                    </div>
                    <h2>
                      <a href="single-post.html">
                        Lets Get Back to Work, New York
                      </a>
                    </h2>
                  </div>
                  <div class="post-entry-1">
                    <a href="single-post.html">
                      <img src="Images/blog2.jpg" alt="" class="img-fluid" />
                    </a>
                    <div class="post-meta">
                      <span class="date">Food</span>{" "}
                      <span class="mx-1">&bullet;</span>{" "}
                      <span>Jul 17th '22</span>
                    </div>
                    <h2>
                      <a href="single-post.html">
                        How to Avoid Distraction and Stay Focused During Video
                        Calls?
                      </a>
                    </h2>
                  </div>
                  <div class="post-entry-1">
                    <a href="single-post.html">
                      <img src="Images/blog3.jpg" alt="" class="img-fluid" />
                    </a>
                    <div class="post-meta">
                      <span class="date">Design</span>{" "}
                      <span class="mx-1">&bullet;</span>{" "}
                      <span>Mar 15th '22</span>
                    </div>
                    <h2>
                      <a href="single-post.html">
                        Why Craigslist Tampa Is One of The Most Interesting
                        Places On the Web?
                      </a>
                    </h2>
                  </div>
                </div>
                <div class="col-lg-4 border-start custom-border">
                  <div class="post-entry-1">
                    <a href="single-post.html">
                      <img src="Images/blog4.jpg" alt="" class="img-fluid" />
                    </a>
                    <div class="post-meta">
                      <span class="date">Sport</span>{" "}
                      <span class="mx-1">&bullet;</span>{" "}
                      <span>Jul 5th '22</span>
                    </div>
                    <h2>
                      <a href="single-post.html">
                        Lets Get Back to Work, New York
                      </a>
                    </h2>
                  </div>
                  <div class="post-entry-1">
                    <a href="single-post.html">
                      <img src="Images/blog1.jpg" alt="" class="img-fluid" />
                    </a>
                    <div class="post-meta">
                      <span class="date">Food</span>{" "}
                      <span class="mx-1">&bullet;</span>{" "}
                      <span>Jul 17th '22</span>
                    </div>
                    <h2>
                      <a href="single-post.html">
                        How to Avoid Distraction and Stay Focused During Video
                        Calls?
                      </a>
                    </h2>
                  </div>
                  <div class="post-entry-1">
                    <a href="single-post.html">
                      <img src="Images/blog2.jpg" alt="" class="img-fluid" />
                    </a>
                    <div class="post-meta">
                      <span class="date">Design</span>{" "}
                      <span class="mx-1">&bullet;</span>{" "}
                      <span>Mar 15th '22</span>
                    </div>
                    <h2>
                      <a href="single-post.html">
                        Why Craigslist Tampa Is One of The Most Interesting
                        Places On the Web?
                      </a>
                    </h2>
                  </div>
                </div>
                <div class="col-lg-4">
                  <div class="trending">
                    <h3>Trending</h3>
                    <ul class="trending-post">
                      <li>
                        <a href="single-post.html">
                          <span class="number">1</span>
                          <h3>
                            The Best Homemade Masks for Face (keep the Pimples
                            Away)
                          </h3>
                          <span class="author">Jane Cooper</span>
                        </a>
                      </li>
                      <li>
                        <a href="single-post.html">
                          <span class="number">2</span>
                          <h3>
                            17 Pictures of Medium Length Hair in Layers That
                            Will Inspire Your New Haircut
                          </h3>
                          <span class="author">Wade Warren</span>
                        </a>
                      </li>
                      <li>
                        <a href="single-post.html">
                          <span class="number">3</span>
                          <h3>
                            13 Amazing Poems from Shel Silverstein with Valuable
                            Life Lessons
                          </h3>
                          <span class="author">Esther Howard</span>
                        </a>
                      </li>
                      <li>
                        <a href="single-post.html">
                          <span class="number">4</span>
                          <h3>
                            9 Half-up/half-down Hairstyles for Long and Medium
                            Hair
                          </h3>
                          <span class="author">Cameron Williamson</span>
                        </a>
                      </li>
                      <li>
                        <a href="single-post.html">
                          <span class="number">5</span>
                          <h3>
                            Life Insurance And Pregnancy: A Working Moms Guide
                          </h3>
                          <span class="author">Jenny Wilson</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
