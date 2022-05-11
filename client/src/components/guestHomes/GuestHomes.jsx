import React from "react";

import useFetch from "../../hooks/useFetch";
import "./guestHomes.css";

const GuestHomes = () => {
  const { data, loading, error } = useFetch("/hotels?featured=true&limit=4");

  return (
    <div className='fp'>
      {loading ? (
        "Loading..."
      ) : (
        <>
          {data.map((item, i) => (
            <div className='fpItem' key={i}>
              <img src={item.photos[0]} alt='' className='fpImg' />
              <span className='fpName'>{item.name}</span>
              <span className='fpCity'>{item.city}</span>
              <span className='fpPrice'>
                Starting from ${item.cheapestPrice}
              </span>
              {item.rating && (
                <div className='fpRating'>
                  <button>8.9</button>
                  <span>Excellent </span>
                </div>
              )}
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default GuestHomes;
