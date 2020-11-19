import React from 'react';
import './styles.css';

const NavBar = ({brandName, brandNameStyle}) => {
  return (
    <nav>
      <div className='menu-wrapper'>
        <p style={{brandNameStyle}} className='brand-name'>{brandName ? brandName : 'Brand Name'}</p>
        <div className='menu-button-wrapper'>
          <button>btn1</button>
          <button>btn2</button>
          <button>btn3</button>
          <button>btn4</button>
        </div>
      </div>
    </nav>
  )
}

export default NavBar;
