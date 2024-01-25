import React from 'react'
import './style.scss'
import HeroBanner from './heroBanner/HeroBanner';
import Trending from './trending/Trending';
import Popular from './popular/Popular';
import TopRated from './topRated/TopRated';
import UpComing from './upComing/UpComing';
import Discover from './discover/Discover';

HeroBanner

const Home = () => {
  return (
    <div className='homepage'>
      <HeroBanner/>
      <Trending/>
      <Popular />
      <TopRated/>
      <UpComing/>
      <Discover/> 
    </div>
  );
};

export default Home
