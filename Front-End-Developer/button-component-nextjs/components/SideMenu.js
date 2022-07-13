import React, { Fragment } from 'react'
import logo from '../assets/logo.png'
import Image from 'next/image'
import styles from '../styles/SideMenu.module.css'

const menuItems = ['Colors', 'Typography', 'Spaces', 'Buttons', 'Inputs', 'Grid']

function SideMenu() {
  return (
    <Fragment>
            

           <Image src={logo} alt='Our Site LOGO' height={100} objectFit="cover"/> 

           {menuItems.map((e) => {
            if(e === 'Inputs'){
                return <button key={e} className={styles.sideMenu__button}>{e}</button>;
            }
            return <button key={e} className={styles.sideMenu__button}>{e}</button>;
           })}
           
         
      

    </Fragment>
  )
}

export default SideMenu