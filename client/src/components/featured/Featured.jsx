import React from "react";
import useFetch from "../../hooks/useFetch";

import "./featured.css";

const Featured = () => {
  const { data, loading, error } = useFetch(
    "/hotels/countByCity?cities=berlin,madrid,london"
  );

  return (
    <div className='featured'>
      {loading ? (
        "Loading please wait"
      ) : (
        <>
          <div className='featuredItem'>
            <img
              src='https://a.cdn-hotels.com/images/common/pages/hpa/modules/uniquepropertiesmodul/grandmiramarallluxurysuitesandresidences.jpg'
              alt=''
              className='featuredImg'
            />
            <div className='overlay'></div>
            <div className='featuredTitles'>
              <h1>Mexico</h1>
              <h4>{data[0]} properties</h4>
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
              <h4>{data[1]} properties</h4>
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
              <h4>{data[2]} properties</h4>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Featured;
