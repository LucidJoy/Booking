import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleArrowLeft,
  faCircleArrowRight,
  faCircleXmark,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";

import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import MailList from "../../components/mailList/MailList";
import Footer from "../../components/footer/Footer";
import "./hotel.css";
import { useLocation } from "react-router-dom";
import useFetch from "../../hooks/useFetch";

const Hotel = () => {
  const location = useLocation();
  const id = location.pathname.split("/")[2];

  const [slideNumber, setSlideNumber] = useState(0);
  const [open, setOpen] = useState(false);

  const { data, loading, error } = useFetch(`/hotels/find/${id}`);

  const handleOpen = (i) => {
    setSlideNumber(i);
    setOpen(true);
  };

  const handleMove = (direction) => {
    let newSlideNumber;

    if (direction === "l") {
      newSlideNumber = slideNumber === 0 ? 5 : slideNumber - 1;
    } else {
      newSlideNumber = slideNumber === 5 ? 0 : slideNumber + 1;
    }

    setSlideNumber(newSlideNumber);
  };

  return (
    <div>
      <Navbar />
      <Header type='list' />
      {loading ? (
        "Loading..."
      ) : (
        <>
          <div className='hotelContainer'>
            {open && (
              <div className='slider'>
                <FontAwesomeIcon
                  icon={faCircleXmark}
                  className='close'
                  onClick={() => setOpen(false)}
                />

                <div className='sliderWrapper'>
                  <FontAwesomeIcon
                    icon={faCircleArrowLeft}
                    className='arrow'
                    onClick={() => handleMove("l")}
                  />

                  <img
                    src={data.photos[slideNumber]}
                    className='sliderImg'
                    alt=''
                  />

                  <FontAwesomeIcon
                    icon={faCircleArrowRight}
                    className='arrow'
                    onClick={() => handleMove("r")}
                  />
                </div>
              </div>
            )}

            <div className='hotelWrapper'>
              <button className='bookNow'>Reserve</button>

              <h1 className='hotelTitle'>{data.name}</h1>

              <div className='hotelAddress'>
                <FontAwesomeIcon icon={faLocationDot} />
                <span>{data.address}</span>
              </div>

              <span className='hotelDistance'>
                Excellent location - {data.distance}m from center
              </span>

              <span className='hotelPriceHighlight'>
                Book a stay over ${data.cheapestPrice} at this property and get
                a free airport taxi
              </span>

              <div className='hotelImages'>
                {data.photos?.map((pic, i) => (
                  <div className='hotelImgWrapper'>
                    <img
                      onClick={() => handleOpen(i)}
                      src={pic}
                      alt=''
                      className='hotelImg'
                    />
                  </div>
                ))}
              </div>

              <div className='hotelDetails'>
                <div className='hotelDetailsTexts'>
                  <h1 className='hotelTitle'>{data.title}</h1>
                  <p className='hotelDesc'>{data.desc}</p>
                </div>

                <div className='hotelDetailsPrice'>
                  <h3>Property highlights</h3>
                  <span>
                    Located in the heart of Las Vegas, this property has an
                    excellent location score of 9.8!
                  </span>
                  <h2>
                    <b>$945</b> <small className='smallText'>(9 nights)</small>
                  </h2>
                  <button>Reserve</button>
                </div>
              </div>
            </div>

            <MailList />
            <Footer />
          </div>
        </>
      )}
    </div>
  );
};

export default Hotel;
