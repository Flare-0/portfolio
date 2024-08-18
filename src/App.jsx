import { useEffect, useState } from 'react'
import Herotext from './comp/Herotext'
import Cursor from './comp/Cursor'
import Header from './comp/Header'
import Aboutme from './comp/aboutme'
import './css/App.css'
import "./css/scrollbar.css"
// import './Text.css'
function App() {


  return (

    <>
    <Header/>
      <div className="V_scroll_container">
        <Cursor windo={window} />
        <div className="sectionOne">
          <Herotext txt="The quick brown fox jumped over the lazy dog" />
          <Herotext txt="The quick brown fox jumped over the lazy dog" />
          <Herotext txt="The quick brown fox jumped over the lazy dog" />
          <Herotext txt="The quick brown fox jumped over the lazy dog" />
        </div>
        
        <Aboutme/>
      
      </div>
    </>
  )
}

export default App
