import React from 'react'
import styles from '../styles/Home.module.css'
const Navbar = () => {
  return (
    <div className={styles.trans}>
    <div className='bg-[#81818B]/10'>
        <div className="container mx-auto text-black flex justify-between items-center py-3" >
        <a href="./"><img  src="/assets/LOGO.png" alt="" width="230px"/></a>
            <div className="flex gap-10 items-center">
              <a className={styles.nav} href="/Articles"> Articles</a>
              <a className={styles.nav} href="/Services">  Services</a>
              <a className={styles.nav} href="/Projets Référents"> Projets Référents</a>
              <a className={styles.nav} href="/Contact"> Contact</a>
              <a  className={styles.nav} href="/Formulaire du devis"> Formulaire du devis</a>
              <ul className={styles.drop}><div className={styles.dropdown}><a  href="#">FR▼ </a>
                <div>
                  <li><a href="/AR"> AR</a></li>
                  <li><a href="/EN"> EN</a></li>
                </div>
                </div>
              </ul>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Navbar