import styles from "./style.module.css"
export default function PageContainer({children}){
    return(
        <>
           <header className={styles.head}>
                <div className={styles.container}>
                    <nav className={styles.nav}>
                        <a href="/">Əsas Səhifə</a>
                        <a href="/Products">Products</a>
                        <a href="/Contact">Kontakt</a>
                    </nav>
                </div>
           </header>
           <main>
                <div className={styles.container}>
                      {children}
                </div>
           </main>
           <footer className={styles.foot}>
            <div className={styles.container}>
            @created by Zahid Menefli
            </div>
           </footer>
        </>
    )
}