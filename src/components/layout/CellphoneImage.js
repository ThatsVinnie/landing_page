import styles from './CellphoneImage.module.css'
import cell_01 from './../../img/cell_01.png'
import cell_02 from './../../img/cell_02.png'

function CellphoneImage(){
    return(
        <div className={styles.container}>
            <div></div>
            <img src={cell_02} className={styles.cell02} alt="cell 02"></img>
            <img src={cell_01} className={styles.cell01} alt="cell 01"></img>
        </div>
    )
}

export default CellphoneImage