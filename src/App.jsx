import { useState, useEffect } from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom'

import { fetchDataFromApi } from "./utils/api";

import { useSelector, useDispatch } from 'react-redux';
import { getApiConfiguration, getGenres } from './store/homeSlice';

import SearchResult from './pages/searchResult/SearchResult';
import Details from './pages/details/Details';
import Home from './pages/home/Home';
import Header from './components/header/header';
import Footer from './components/footer/Footer'
import PageNotFound from './pages/404/PageNotFound'
import Explore from './pages/explore/Explore';
function App() {
  const dispatch = useDispatch()
  const { url } = useSelector((state) =>
    state.home)
  // console.log(url)

  useEffect(() => {
    fetchApiConfig();
    genresCall()
  }, []);

  const fetchApiConfig = () => {
    fetchDataFromApi("/configuration").then((res) => {
      // console.log(res);

      const url = {
        backdrop: res.images.secure_base_url + "original",
        poster: res.images.secure_base_url + "original",
        profile: res.images.secure_base_url + "original",
      };

      dispatch(getApiConfiguration(url))
    });
  };

  const genresCall = async () => {
    let promises = []
    let endPoints = ["tv", "movie"]
    let allGenres = {}

    endPoints.forEach((url) => {
      promises.push(fetchDataFromApi(`/genre/${url}/list`))
    })

    const data = await Promise.all(promises);
    data.map(({genres}) => {
      return genres.map((item) => (allGenres[item.id] = item))
    });
    dispatch(getGenres(allGenres));
  };

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/:mediaType/:id' element={<Details />} />
        <Route path='/search/:query' element={<SearchResult />} />
        <Route path='/explore/:mediaType' element={<Explore />} />
        <Route path='*' element={<PageNotFound />} />
      </Routes>
      <Footer />

    </BrowserRouter>
  )
}

export default App