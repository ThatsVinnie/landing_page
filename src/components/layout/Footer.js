import styles from './Footer.module.css'
import Waves from './../../img/wave.svg'

function Footer(){
    return(
        <footer className={styles.footer}>
            <span>&copy; 2023 GymTracker. All Rights Reserved</span>
        </footer>
        
    )
}

export default Footer