import styles from './Header.module.css'
import logo from "./../../img/logo.png"

function Header(){
    return(
        <>
            <header className={styles.header}>
            <span>
                <img src={logo} alt="GymTracker"/>
                GymTracker
            </span>
            </header>
        </>
    )
}

export default Header