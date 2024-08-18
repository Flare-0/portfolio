import { useEffect, useState } from 'react'
import Herotext from './comp/Herotext'
import Cursor from './comp/Cursor'
import Header from './comp/Header'
import './css/App.css'
import "./css/scrollbar.css"
// import './Text.css'
function App() {


  return (

    <>
    <Header/>

        <Cursor windo={window} />
        <div className="sectionOne">
          <Herotext txt="The quick brown fox jumped over the lazy dog" />
          <Herotext txt="The quick brown fox jumped over the lazy dog" />
          <Herotext txt="The quick brown fox jumped over the lazy dog" />
          <Herotext txt="The quick brown fox jumped over the lazy dog" />
        </div>
            </>
  )
}

export default App
