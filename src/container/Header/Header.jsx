import React from 'react';
import { images } from '../../constants';
import { SubHeading } from '../../components';
import './Header.css';

const Header = () => (
  <div className="app__header app__wrapper section__padding" id="home">
    <div className="app__wrapper_info">   
      <SubHeading title="Chase the New flavour" />
      <h1 className='app__header-h1'> The Key to Fine Dining</h1>
      <p className='p__opensans' style={{ margin: '2rem 0' }}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum rem ea dicta. Consequatur a laborum ullam dolorum fugit perferendis explicabo dolore, sapiente tempora aspernatur quasi exercitationem eius. Adipisci, magnam quibusdam?
      </p>
      <button type="button" className='custom__button'>Explore Menu</button>
    </div>

    <div className="app__wrapper_img">
      <img src={images.welcome} alt="img"/>
    </div>
  </div>
);

export default Header;
