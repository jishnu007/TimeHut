import React, { useEffect } from 'react';

const Home = (props) => {

    return ( 
        <React.Fragment> 
        <div className="site-blocks-cover" style={{"backgroundImage": "url(images/hero_1.jpg)"}} data-aos="fade">
      <div className="container">
        <div className="row align-items-start align-items-md-center justify-content-end">
          <div className="col-md-5 text-center text-md-left pt-5 pt-md-0 pl-5">
            <h1 className="mb-5">Finding Your Perfect Watch</h1>
            <div className="intro-text text-center text-md-left">
              <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus at iaculis quam. Integer accumsan tincidunt fringilla. </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="site-section site-section-sm site-blocks-1">
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-lg-4 d-lg-flex mb-4 mb-lg-0 pl-4" data-aos="fade-up" data-aos-delay="">
            <div className="icon mr-4 align-self-start">
              <span className="icon-truck"></span>
            </div>
            <div className="text">
              <h2 className="text-uppercase">Free Shipping</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus at iaculis quam. Integer accumsan tincidunt fringilla.</p>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 d-lg-flex mb-4 mb-lg-0 pl-4" data-aos="fade-up" data-aos-delay="100">
            <div className="icon mr-4 align-self-start">
              <span className="icon-refresh2"></span>
            </div>
            <div className="text">
              <h2 className="text-uppercase">Free Returns</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus at iaculis quam. Integer accumsan tincidunt fringilla.</p>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 d-lg-flex mb-4 mb-lg-0 pl-4" data-aos="fade-up" data-aos-delay="200">
            <div className="icon mr-4 align-self-start">
              <span className="icon-help"></span>
            </div>
            <div className="text">
              <h2 className="text-uppercase">Customer Support</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus at iaculis quam. Integer accumsan tincidunt fringilla.</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="site-section site-blocks-2">
      <div className="container">
        <div className="row">
          <div className="col-sm-6 col-md-6 col-lg-4 mb-4 mb-lg-0" data-aos="fade" data-aos-delay="">
            <a className="block-2-item" href="#">
              <figure className="image">
                <img src="images/women.jpg" alt="" className="img-fluid"/>
              </figure>
              <div className="text">
                <span className="text-uppercase">Collections</span>
                <h3>Women</h3>
              </div>
            </a>
          </div>
          <div className="col-sm-6 col-md-6 col-lg-4 mb-5 mb-lg-0" data-aos="fade" data-aos-delay="100">
            <a className="block-2-item" href="#">
              <figure className="image">
                <img src="images/children.jpg" alt="" className="img-fluid"/>
              </figure>
              <div className="text">
                <span className="text-uppercase">Collections</span>
                <h3>Kids</h3>
              </div>
            </a>
          </div>
          <div className="col-sm-6 col-md-6 col-lg-4 mb-5 mb-lg-0" data-aos="fade" data-aos-delay="200">
            <a className="block-2-item" href="#">
              <figure className="image">
                <img src="images/men.jpg" alt="" className="img-fluid"/>
              </figure>
              <div className="text">
                <span className="text-uppercase">Collections</span>
                <h3>Men</h3>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>

    <div className="site-section block-3 site-blocks-2 bg-light">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-7 site-section-heading text-center pt-4">
            <h2>Featured Products</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="nonloop-block-3 owl-carousel">
              <div className="item">
                <div className="block-4 text-center">
                  <figure className="block-4-image">
                    <img src="uploads/fas1.jpg" alt="Image placeholder" className="img-fluid"/>
                  </figure>
                  <div className="block-4-text p-4">
                    <h3><a href="#">Fastrack Pink Analogue</a></h3>
                    <p className="mb-0">Finding perfect watch</p>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="block-4 text-center">
                  <figure className="block-4-image">
                    <img src="uploads/db21.jpg" alt="Image placeholder" className="img-fluid"/>
                  </figure>
                  <div className="block-4-text p-4">
                    <h3><a href="#">DressBerry Pink Analogue</a></h3>
                    <p className="mb-0">Finding perfect products</p>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="block-4 text-center">
                  <figure className="block-4-image">
                    <img src="uploads/th1.jpg" alt="Image placeholder" className="img-fluid"/>
                  </figure>
                  <div className="block-4-text p-4">
                    <h3><a href="#">Tommy Hilfiger</a></h3>
                    <p className="mb-0">Finding perfect products</p>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="block-4 text-center">
                  <figure className="block-4-image">
                    <img src="uploads/fw1.jpg" alt="Image placeholder" className="img-fluid"/>
                  </figure>
                  <div className="block-4-text p-4">
                    <h3><a href="#">Fantasy World</a></h3>
                    <p className="mb-0">Finding perfect products</p>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="block-4 text-center">
                  <figure className="block-4-image">
                    <img src="uploads/vw1.jpg" alt="Image placeholder" className="img-fluid"/>
                  </figure>
                  <div className="block-4-text p-4">
                    <h3><a href="#">Vuffuw Waterproof Smartwatch</a></h3>
                    <p className="mb-0">Finding perfect products</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="site-section block-8">
      <div className="container">
        <div className="row justify-content-center  mb-5">
          <div className="col-md-7 site-section-heading text-center pt-4">
            <h2 style={{color: 'red', fontWeight: 'bolder', fontSize: '35px'}}>Big Sale!</h2>
          </div>
        </div>
        <div className="row align-items-center">
          <div className="col-md-12 col-lg-7 mb-5">
            <a href="#"><img src="images/blog_1.jpg" alt="Image placeholder" className="img-fluid rounded"/></a>
          </div>
          <div className="col-md-12 col-lg-5 text-center pl-md-5">
            <h2>28% off in all items</h2>
            <p className="post-meta mb-4">On <a href="#">Dior Brand</a> <span className="block-8-sep"></span></p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam iste dolor accusantium facere corporis ipsum animi deleniti fugiat. Ex, veniam?</p>
          </div>
        </div>
      </div>
    </div>
    </React.Fragment>
     );
}
 
export default Home;