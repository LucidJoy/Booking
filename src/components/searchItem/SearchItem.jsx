import React from "react";

import "./searchItem.css";

const SearchItem = () => {
  return (
    <div className='searchItem'>
      <img
        src='https://cf.bstatic.com/xdata/images/hotel/square600/77848502.webp?k=d7d01f97d7688d5780a1003335e68b423eb811d4cd82c1c3c06125ea303f113c&o=&s=1'
        alt=''
        className='siImg'
      />

      <div className='siDesc'>
        <h1 className='siTitle'>Marina del Rey Marriott</h1>
        <span className='siDistance'>21.4 km from centre</span>
        <span className='siTaxiOp'>Free airport taxi</span>
        <span className='siSubtitle'>
          Studio Apartment with Air conditioning
        </span>
        <span className='siFeatures'>
          Entire studio • 1 bathroom • 1 double bed
        </span>
        <span className='siCancelOp'>Free cancellation</span>
        <span className='siCancelOpSubtitle'>
          You can cancel later, so lock in this great price today.
        </span>
      </div>

      <div className='siDetails'>
        <div className='siRating'>
          <span>Excellent</span>
          <button>8.9</button>
        </div>

        <div className='siDetailTexts'>
          <span className='siPrice'>$123</span>
          <span className='siTaxOp'>Includes taxes and fees</span>
          <button className='siCheckButton'>See availability</button>
        </div>
      </div>
    </div>
  );
};

export default SearchItem;
