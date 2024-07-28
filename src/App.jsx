import { useEffect, useState } from 'react'
import Herotext from './comp/Herotext'
import Cursor from './comp/Cursor'
import Header from './comp/Header'
import Aboutme from './comp/aboutme'
import './css/App.css'
import "./css/scrollbar.css"
// import './Text.css'
function App() {


 
  const scrollHandler = (event) => {
    console.log(event)
    event.preventDefault();
    
    // Determine the scroll direction
    const scrollAmount = event.deltaY > 0 ? 400 : -400; // Change scroll amount to adjust speed
    
    document.querySelector('.V_scroll_container').scrollBy({
      left: scrollAmount,
      behavior: 'smooth',
    });
  };


  return (

    <>
    <Header/>
      <div className="V_scroll_container" onWheel={scrollHandler}>
        <Cursor windo={window} />
        <div className="sectionOne">
          <Herotext txt="The quick brown fox jumped over the lazy dog" />
          <Herotext txt="The quick brown fox jumped over the lazy dog" />
          <Herotext txt="The quick brown fox jumped over the lazy dog" />
          <Herotext txt="The quick brown fox jumped over the lazy dog" />
        </div>
        
        <Aboutme/>
      

        <div className="ddiv">
          <div className="div1"></div>
          <div className="div1"></div>
          <div className="div1"></div>
          <div className="div1"></div>
          <div className="div1"></div>
          <div className="div1"></div>
          <div className="div1"></div>
          <div className="div1"></div>
          <div className="div1"></div>
          <div className="div1"></div> 
          </div>
        <div className="ddiv">
          <div className="div1"></div>
          <div className="div1"></div>
          <div className="div1"></div>
          <div className="div1"></div>
          <div className="div1"></div>
          <div className="div1"></div>
          <div className="div1"></div>
          <div className="div1"></div>
          <div className="div1"></div>
          <div className="div1"></div> 
          </div>
      </div>
    </>
  )
}

export default App
