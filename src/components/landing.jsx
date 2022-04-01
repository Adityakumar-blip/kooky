import React from 'react'
import './landing.css'
import img1 from './Assets/img1.jpg';
import img2 from './Assets/img2.jpg';
import img3 from './Assets/img3.jpg';
import img4 from './Assets/img4.jpg';
import img5 from './Assets/img5.jpg';
import img6 from './Assets/img6.jpg';
import img7 from './Assets/img7.jpg';
import img8 from './Assets/img8.jpg';
 import {Link} from 'react-router-dom';
import img9 from './Assets/img9.jpg';


import Slider from 'react-slick'
function landing() {
  
    const settings1 = {
        dots: true,
        infinite: true,
        speed: 500,
         
        slidesToShow: 2,
        slidesToScroll: 1,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                initialSlide: 1
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
    };
    return (
        <>
            <div className=" row m-0 landing-wrapper">
                <div className=" col col-lg-6 col-md-6 col-sm-12 col-xm-12 landing-img">
 
                         <div>
                            <div className="slider-img">


                                <img src={img1} alt="" />
                            </div>
                        </div>
                        
                    
                </div>
                <div className=" col col-lg-6 col-md-6 col-sm-12 col-xm-12 landing-text">
                    <p>ALL NATURAL</p>
                    <h1>Kooky For Everybody</h1>
                    <p className='about-product' >Now no more need to spend hours behind a hair wash routine. Your fresh and smooth conditioned hair is now the responsibility of KOOKY.</p>
                    <Link to="/ordernow"> <button className='order-now' >Order Now</button></Link>
                </div>
            </div>
            <div id='feature'  className="product-features row m-0  ">
                <div className="col col-lg-6 col-md-6 col-sm-12 col-xm-12 features-text">
                    <p style={{fontWeight:'600',fontSize:'1.5rem'}}>PRODUCT FEATURES</p>
                    <h1> Think high always expect the best.</h1>
                    <p className='about-product' >Oil-control shampoos would help keep your scalp grease-free. Anti-dandruff products would ensure that you are free of flaky scalp. Use conditioners to control your frizz,</p>
                    
                                    </div>
                <div  className="col col-lg-6 col-md-6 col-sm-12 col-xm-12 features-img ">
                  <img src={img6} alt="" />
                </div>

                <div className="slide-container">
                    <Slider {...settings1}>

                        <div className='slider-img-wrapper'>
                            <div className='slider-img-container'><img className='slider-img-second'  src={img3} alt="" />
                        </div></div>
                        <div>
                            <div className='slider-img-container'><img className='slider-img-second'  src={img6} alt="" />
                        </div></div>
                        <div>
                           <div className='slider-img-container'> <img  className='slider-img-second' src={img4} alt="" />
                       </div> </div>
                        <div>
                            <div className='slider-img-container'><img className='slider-img-second'  src={img5} alt="" />
                        </div></div>
                    </Slider>
                </div>
            </div>
       <div className="ninitynine row m-0">
           <div className="col col-lg-6 img-container">
                <div className="img-cont">
                   
                </div>
           </div>
           <div className="col col-lg-6 text-cont-99">
               <h1>99%</h1>
               <h2>Be good to your hair. You’ll wear it everyday</h2>
               <p>It is going to represent you for very long time</p>
           </div>
       </div>
            <div className="before-after">
                <div className='befo-after row m-0 '>
                    <div className="col col-lg-5 col-sm-12 col-xm-12 befo-after-text">
                      <p>Before & After</p>
                      <h1>Add Wow To Your Hairs</h1>
                      <p className='befo-product'> Beautiful hairs requires commitment. Keep your hairs moisterised</p>
                      <Link to="/ordernow"> <button className='order-now' >Order Now</button></Link>

                    </div>
                    <div className="col col-lg-7 col-sm-12 col-xm-12 before-after-img">
                        <img style={{width:'100%'}} src={img4} alt="" />
                    </div>
                </div>
               
            </div>
              <div className="footer-wrapper">
                  <div className="footer-img-container">
                      <div className='foot-img1'></div>
                      <div className='foot-img2'></div>
                      
                  </div>
            <div className="footers row m-0">
                 <div className="col col-lg-6 col-sm-12 col-md-6 col-xm-12">
                     <p>Quick Contact</p>
                       <button>  <a href="">  Connect With Us </a></button>
                    
                 </div>
                 <div className="col col-lg-6 col-sm-12 col-md-6 col-xm-12 follow-us"><a href=""> Follow Us </a></div>
                 <hr  />
                 <p>Copyright 2022, Kooky</p>
            </div>
            
            </div>
        </>
    )
}

export default landing