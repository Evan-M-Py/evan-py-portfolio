import React from 'react';
import CoverImage from './components/topHalf/CoverImage'
import BottomHalf from './components/bottomHalf/BottomHalf';
import ProjectDiscHover from './components/bottomHalf/ProjDiscHover';
import BottomBio from './components/bottomHalf/BottomBio';
import NameBio from './components/topHalf/nameBio';
import NavBar from './components/NavBar.js'

function App() {

  const style = {
    
    top: {
      display: 'flex',
      height: '50vh',
    },

    nameBioStyle: {
      width: '40rem',
      flex: '1',
      margin: '0',
      padding: '0',
    },

    bottom: {
      height: '50vh',
      margin: '0'
    },

    content: {
      position: 'absolute'
    }
  }

  return (

    <div className="App " >


        <NameBio  nameBioStyle={style.nameBioStyle}/>



      <NavBar/>


    </div>
  );
}

export default App;
