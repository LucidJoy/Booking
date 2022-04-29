import React from "react";

import "./footer.css";

const Footer = () => {
  return (
    <div className='footer'>
      <div className='fLists'>
        <ul className='fList'>
          <li className='fListItem'>Countries</li>
          <li className='fListItem'>Regions</li>
          <li className='fListItem'>Cities</li>
          <li className='fListItem'>Districts</li>
          <li className='fListItem'>Airports</li>
          <li className='fListItem'>Hotels</li>
        </ul>

        <ul className='fList'>
          <li className='fListItem'>Homes</li>
          <li className='fListItem'>Apartments</li>
          <li className='fListItem'>Resorts</li>
          <li className='fListItem'>Villas</li>
          <li className='fListItem'>Hostels</li>
          <li className='fListItem'>Guest houses</li>
        </ul>

        <ul className='fList'>
          <li className='fListItem'>Unique places to stay</li>
          <li className='fListItem'>All destinations</li>
          <li className='fListItem'>Discover</li>
          <li className='fListItem'>Reviews</li>
          <li className='fListItem'>Unpacked: Travel articles</li>
          <li className='fListItem'>Travel Communities</li>
        </ul>

        <ul className='fList'>
          <li className='fListItem'>Car hire</li>
          <li className='fListItem'>Flight finder</li>
          <li className='fListItem'>Restaurant reservations</li>
          <li className='fListItem'>Travel Agents</li>
        </ul>

        <ul className='fList'>
          <li className='fListItem'>Coronavirus (COVID-19) FAQs</li>
          <li className='fListItem'>Customer Service help</li>
          <li className='fListItem'>Partner help</li>
          <li className='fListItem'>Careers</li>
          <li className='fListItem'>Terms & Conditions</li>
          <li className='fListItem'>Privacy & Cookie Statement</li>
        </ul>
      </div>

      <div className='fText'>
        Copyright &copy; 2022 Lamabooking. All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
