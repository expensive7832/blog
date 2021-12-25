import request from '../request';
import axios from '../axios';
import { useState, useEffect } from 'react';
import placeholderheroImg from './assets/newsglobe.jpg';
import { FaArrowDown, FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';
import {Link } from "react-router-dom";
const Hero = () => {

    const [Generalnews, setGeneralnews] = useState('');

    useEffect(() =>{

        const getGeneralNews = async() => {
            const req = await axios.get(request.general);
            setGeneralnews(req.data.results[Math.floor(Math.random() * req.data.results.length)]);
            return req;
        }

        getGeneralNews();
    }, []);

    const heroBackground = {
        backgroundImage : `url(${Generalnews.image_url ? Generalnews.image_url : placeholderheroImg} )`,
        backgroundSize: "cover",
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
        height: "80vh",
    }

    return (
        <div className="hero"  style={heroBackground} >
            <div className="container-fluid position-absolute">
              <div className="row">
                  <div className="col-12 col-md-6">
                      <h3 data-aos="flip-right" data-aos-duration="3000" className="text-center text-white display-6 fw-bold"><FaQuoteLeft/><FaQuoteRight/></h3>
                      <p className="text-center text-capitalize text-light">{Generalnews.description ? Generalnews.description : "Welcome To My Blog, Home Of Gist And Fun"}</p>
                      <div className="text-center">
                      <button data-aos="fade-down" data-aos-duration="3000" className="btn text-center text-white bg-primary btn-md mt-5"><Link className="text-white" to="">Get Started<FaArrowDown style={{padding: "0 .1rem"}}/></Link></button>
                      </div>
                  </div>
              </div>
          </div>
        </div>
    )
}

export default Hero
