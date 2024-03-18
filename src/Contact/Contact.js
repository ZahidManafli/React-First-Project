import styles from "./style.module.css"
import logo from "../img/logo-brand-circle-area-pepsi-pepsi-logo-png-photos-93ac5b0bfdc06c388c463d9237fa8438.png"
import PageContainer from "../PageContainer/PageContainer"
export default function Contact(){
    return (
        <PageContainer>
        <div className={styles.section}>                
            <img src={logo} className={styles.image}/>
            <a href="https://pepsi.com.tr/">www.pepsi.com.tr</a>
        </div>
        </PageContainer>
    )
}