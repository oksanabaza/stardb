import React from 'react';

import './header.css';

const Header = () => {

  return (
    <div className="header d-flex">
      <h3>Star DB</h3>
      <ul className="d-flex">
        <li>
          People
        </li>
        <li>Planet</li>
        <li>Starships</li>
      </ul>
    </div>

  );
};

export default Header;