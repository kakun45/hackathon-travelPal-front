// import logo from './logo.svg';
import './App.scss';
import Main from './components/Main';
import Header from './components/Header/Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Itinerary from './pages/Itinerary';
import { useState } from 'react';

function App() {
  const [itineraryList, setItineraryList] = useState([])

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Main setItineraryList={setItineraryList} />} />
        <Route path='/itinerary'
          element={<Itinerary setItineraryList={setItineraryList} itineraryList={itineraryList} />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
