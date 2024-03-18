import PageContainer from "../PageContainer/PageContainer"
import styles from "./style.module.css"
import src1 from "../img/pepsi_blue.png"
import src2 from "../img/pepsi_black.png"
import src3 from "../img/pepsi_lemon.png"
import src4 from "../img/pepsi_mango.png"
import src5 from "../img/pepsi_morug.png"
export default function Products(){
    return (
        <PageContainer>
            <div className={styles.section}>
                <div className={styles.images}>
                    <img className={styles.image} src={src1}/>
                    <img className={styles.image} src={src2}/>
                    <img className={styles.image} src={src3}/>
                    <img className={styles.image} src={src4}/>
                    <img className={styles.image} src={src5}/>
                </div>
            </div>
            <button className={styles.button}>Products</button>
        </PageContainer>
    )
}