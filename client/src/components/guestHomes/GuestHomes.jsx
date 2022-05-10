import React from "react";

import "./guestHomes.css";

const GuestHomes = () => {
  return (
    <div className='fp'>
      <div className='fpItem'>
        <img
          src='https://cf.bstatic.com/xdata/images/hotel/max500/103951224.jpg?k=03736dd4e1e89c1132e4957149e394d01ac6e8f64f4b09e30ade97a6176f0640&o='
          alt=''
          className='fpImg'
        />
        <span className='fpName'>Aparthotel Stare Miasto</span>
        <span className='fpCity'>Kraków</span>
        <span className='fpPrice'>Starting from $120</span>
        <div className='fpRating'>
          <button>8.9</button>
          <span>Excellent </span>
        </div>
      </div>
      <div className='fpItem'>
        <img
          src='https://cf.bstatic.com/xdata/images/hotel/max500/40890517.jpg?k=cd55de5463af8988f78fd675904a43d02f77570debe9977c4c1fe658030b6d29&o='
          alt=''
          className='fpImg'
        />
        <span className='fpName'>Appartamento Benincampi</span>
        <span className='fpCity'>Rome</span>
        <span className='fpPrice'>Starting from $250</span>
        <div className='fpRating'>
          <button>9.7</button>
          <span>Excellent </span>
        </div>
      </div>

      <div className='fpItem'>
        <img
          src='https://cf.bstatic.com/xdata/images/hotel/max500/74529578.jpg?k=a7fcefd47d7271daf44f6ce78a215b9505f9f8e5cac3af093b78b9c489fd8461&o='
          alt=''
          className='fpImg'
        />
        <span className='fpName'>Sugar Loft Apartments</span>
        <span className='fpCity'>Rio de Janeiro</span>
        <span className='fpPrice'>Starting from $100</span>
        <div className='fpRating'>
          <button>9.1</button>
          <span>Excellent </span>
        </div>
      </div>

      <div className='fpItem'>
        <img
          src='https://cf.bstatic.com/xdata/images/hotel/max500/38437078.jpg?k=241519692574af90306f0dbec0121eacfddc9a183df3ea34a7b7c8f2b4f5febb&o='
          alt=''
          className='fpImg'
        />
        <span className='fpName'>Unique Design Apartments</span>
        <span className='fpCity'>Lisbon</span>
        <span className='fpPrice'>Starting from $230</span>
        <div className='fpRating'>
          <button>9.4</button>
          <span>Excellent </span>
        </div>
      </div>
    </div>
  );
};

export default GuestHomes;
