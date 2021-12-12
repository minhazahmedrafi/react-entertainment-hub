import './App.css';
import {BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import MainNav from './components/MainNav';
import { Container } from '@material-ui/core';
import Movies from './Pages/Movies/Movies';
import Series from './Pages/Series/Series';
import Search from './Pages/Search/Search';
import Trending from './Pages/Trending/Trending';
function App() {
return (
<BrowserRouter>
  <Header />
  <div className="app">
    <Container>
      <Routes>
        <Route exact path="/" element={<Trending />} />
        <Route exact path="/movies" element={<Movies />} />
        <Route exact path="/series" element={<Series />} />
        <Route exact path="/search" element={<Search />} />
      </Routes>
    </Container>
  </div>
  <MainNav />
</BrowserRouter>
);
}

export default App;