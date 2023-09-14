import styles from './Input.module.css'

function Input({type, placeholder}){
   return( 
    <>
        <input className={styles.input} type={type} placeholder={placeholder}></input>
    </>
   )
}

export default Input