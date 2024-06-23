import React from 'react';
import { menu_list } from '../../assets/assets';
import './ExploreMenu.css';

const ExploreMenu = () => {
  return (
    <div className='explore-menu' id='explore-menu'>
      <h1>Explore our menu</h1>
      <p className='explore-menu-text'>
        Choose from a diverse menu featuring a delectable array of dishes crafted with the finest ingredients and culinary expertise. Each dish is meticulously prepared to tantalize your taste buds, offering a fusion of traditional and contemporary flavors. 
      </p>

      <div className='explore-menu-list'>
        {menu_list.map((item) => (
          <div key={item.id} className='explore-menu-list-item'>
            <img src={item.menu_image} alt={item.menu_name} />
            <p>{item.menu_name}</p>
          </div>
        ))}
      </div>
      <hr/>
    </div>
  );
};

export default ExploreMenu;
