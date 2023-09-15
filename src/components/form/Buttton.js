import styles from './Button.module.css'

function Button({BtnText}){

    function submit(e){
        e.preventDefault()
    }

    return(
        <>
            <button onClick={submit} className={styles.btn}>{BtnText}</button>
        </>
    )
}

export default Button