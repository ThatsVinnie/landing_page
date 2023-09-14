import styles from './Button.module.css'

function Button({BtnText}){
    return(
        <>
            <button className={styles.btn}>{BtnText}</button>
        </>
    )
}

export default Button