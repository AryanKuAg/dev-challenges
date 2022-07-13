import React from 'react'
import SideMenu from './SideMenu'
import MainSection from "./MainSection"
import styles from "../styles/App.module.css"

function App() {
  return (
    <div className={styles.app__main}>
        <SideMenu/>
        <MainSection/>
    </div>
  )
}

export default App