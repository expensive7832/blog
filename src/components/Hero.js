import request from '../request';
import Axios from '../axios';
import { useState, useEffect } from 'react';
import placeholderheroImg from './assets/newsglobe.jpg';
import { FaArrowDown, FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';
import {Link } from "react-router-dom";
const Hero = () => {

    const [Generalnews, setGeneralnews] = useState({});

    useEffect(() =>{

        const Herodesign = async() => {
            const {data } = await Axios.get(request.general);
            setGeneralnews(data?.articles[Math?.floor(Math?.random() * data?.articles?.length)]);
            return data;
        }

        Herodesign();
    }, []);

   // console.log(Generalnews)

    const heroBackground = {
        backgroundColor: "#222",
        backgroundImage : `url(${Generalnews?.urlToImage ? Generalnews?.urlToImage : placeholderheroImg} )`,
        backgroundSize: "cover",
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
        height: "80vh",
        backgroundBlendMode: "excursion"
    }

    return (
        <div className="hero"  style={heroBackground} >
            <div className="container-fluid position-absolute">
              <div className="row">
                  <div className="col-12 col-md-6">
                      <h3 data-aos="flip-right" data-aos-duration="3000" className="text-center text-white display-6 fw-bold"><FaQuoteLeft/><FaQuoteRight/></h3>
                      <p className="text-center text-capitalize text-light">{Generalnews?.description ? Generalnews?.description : "Welcome To My Blog, Home Of Gist And Fun"}</p>
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
