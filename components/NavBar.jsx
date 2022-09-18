import { useState } from "react"
import { useRouter } from "next/router"
import Link from 'next/link'
import { FaBars } from "react-icons/fa";
import classNames from "classnames"

// arquivos css
import styles from '../styles/NavBar.module.css'


function NavBar() {
    const [isNavActive, setIsNavActive] = useState(false)

    function handleToggleNav(){
      setIsNavActive(!isNavActive)
    }
    function closeMenu(){
      setIsNavActive(!isNavActive)
    }

    const classes = classNames(styles.navbar__menu, {[styles.navbar__menu__active]: isNavActive })

    const router = useRouter()

    return ( 
        <div className={styles.navbar}>
            <div className={styles.navbar__title__container}>
                <h1 className={styles.navbar__title}>Sara Brito</h1>
                <span className={styles.navbar__subtitle}>Portfólio Pessoal</span>
            </div>

            <button className={styles.menu__hamburger}
                onClick={handleToggleNav}>
                <FaBars size={30} color="#06A3B8" aria-label="Menu" />
            </button>
            <ul className={classes}>
                <li>
                    <Link  href="/"><a className={router.pathname == '/'? styles.active : ''}>Home</a></Link>
                </li>
                <li>
                    <Link  href="/projects"><a className={router.pathname == '/projects'? styles.active : ''}>Projetos</a></Link>
                </li>
            </ul>
            </div>
     
     );
}

export default NavBar;