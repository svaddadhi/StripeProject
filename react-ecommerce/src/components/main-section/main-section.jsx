import React from 'react';
import MainImage from '../../assets/Tahoe.jpg';
import { withRouter } from 'react-router-dom';
import './main-section.styles.scss';

const MainSection = ({ history }) => {
  return (
    <div className='main-section-container'>
      <div className='main-section-middle'>
        <div className='ms-m-image'>
          <img src={MainImage} alt='main image' />
        </div>
        <div className='ms-m-description'>
          <h2>Shot for pleasure. Crafted for your styling needs</h2>
          <p>These are pics taken by a up and coming photographer.</p>
          <button
            className='button is-black'
            id='shop-now'
            onClick={() => history.push('/product/1')}
          >
            PRINTS
          </button>
        </div>
      </div>
    </div>
  );
};

export default withRouter(MainSection);
