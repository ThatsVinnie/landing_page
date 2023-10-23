import styles from './Header.module.css'
import logo from "./../../img/logo-cell.png"

function Header(){
    return(
        <>
            <header className={styles.header}>
            <span>
                <img src={logo} alt="GymTracker"/>
                <span className={styles.title}>GymTracker</span>
            </span>
            </header>
        </>
    )
}

export default Header