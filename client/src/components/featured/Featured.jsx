import React from "react";

import "./featured.css";

const Featured = () => {
  return (
    <div className='featured'>
      <div className='featuredItem'>
        <img
          src='https://a.cdn-hotels.com/images/common/pages/hpa/modules/uniquepropertiesmodul/grandmiramarallluxurysuitesandresidences.jpg'
          alt=''
          className='featuredImg'
        />
        <div className='overlay'></div>
        <div className='featuredTitles'>
          <h1>Mexico</h1>
          <h4>123 properties</h4>
        </div>
      </div>

      <div className='featuredItem'>
        <img
          src='https://a.cdn-hotels.com/images/common/pages/hpa/modules/uniquepropertiesmodul/hoshinoyafuji.jpg'
          alt=''
          className='featuredImg'
        />
        <div className='overlay'></div>
        <div className='featuredTitles'>
          <h1>Japan</h1>
          <h4>457 properties</h4>
        </div>
      </div>

      <div className='featuredItem'>
        <img
          src='https://a.cdn-hotels.com/images/common/pages/hpa/modules/uniquepropertiesmodul/kakslauttanenarcticresort.jpg'
          alt=''
          className='featuredImg'
        />
        <div className='overlay'></div>
        <div className='featuredTitles'>
          <h1>Finland</h1>
          <h4>97 properties</h4>
        </div>
      </div>
    </div>
  );
};

export default Featured;
