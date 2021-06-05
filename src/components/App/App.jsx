import {useState, useEffect} from 'react';
import axios from 'axios';
import React from 'react';
import './App.css';
import GalleryList from "../GalleryList/GalleryList";

function App() {

  // State Variables
  const [imageList, setImageList] = useState([]);

  // this fires the function on load
  useEffect(()=> {
    // Page is loaded, fire getImageList
    getImageList();
  }, [])

  const getImageList = () => {
    console.log('In getImageList');

    axios.get( '/gallery' )
      .then( response => {
      //save the data in the imageList state
      setImageList( response.data );
      
    })
    .catch( err => {
      console.log( 'Error in getImageList', err );
    })
  }


    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of My Life</h1>
        </header>
        <GalleryList imageList={imageList} getImageList={getImageList} />

      </div>
    );
}

export default App;
