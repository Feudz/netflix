import React from 'react';
import './App.css';
import Row from './Row'
import Request from './requests';
import Banner from './Banner';
import Nav from "./Nav"
function App() {
  return (
    <div className="App">
    <Nav />
    <Banner></Banner>
    <Row
     title="Netflix Originals" 
     fetchUrl={Request.fetchNetFlixOriginals}
     isLargeRow
     />
    <Row title="Trending Now" fetchUrl={Request.fetchTrending}/>
    <Row title="Top Rated" fetchUrl={Request.fetchTopRated}/>
    <Row title="Action Movies" fetchUrl={Request.fetchActionMovies}/>
    <Row title="Comedy Movies" fetchUrl={Request.fetchComedyMovies}/>
    <Row title="Horror Movies" fetchUrl={Request.fetchHorrorMovies}/>
    <Row title="Romance Movies" fetchUrl={Request.fetchRomanceMovies}/>
    <Row title="Documentries" fetchUrl={Request.fetchDocumentaries}/>
    
    
    </div>
  );
}

export default App;
