import PageContainer from "../PageContainer/PageContainer"
import image from "../img/pngimg.com - pepsi_PNG8956.png"
import styles from "./style.module.css"
export default function Home(){
    return (
        <PageContainer>
            <div className={styles.section}>                
            <img className={styles.image} src={image} />
                <div className={styles.info}>
                İlk Pepsi 1893-cü ildə satışa təqdim edilmişdir. 1906-cı ildə ABŞ Qida İnstitutunun içki içərisində zərərli bir maddə olmadığını görməsiylə satışı sərbəst buraxılmışdır. Artan tələbin də təsiriylə ilk qablaşdırma fabrikləri Şimali Karolina əyalətinin Durham və Charlotte şəhərlərində qurulmuşdur. Bu gün dünyanın bir çox ölkəsində qablaşdırma və istehsal fabriki olan Pepsi, demək olar ki, bütün ölkələrdə satılmaqdadır və böyük bir bazar payına malikdir. <br/> <br/>
                2012-ci ildə Coca-Cola və Pepsi şirkətləri ABŞ qanunları əsasında məhsullarının üzərinə xərçəng xəbərdarlıq etiketi salınmamasını üçün içkiyə karamel rəngi verən 4 — metilimidazol maddəsini azaldacaq. Şirkətlər məhsullarında hər hansı bir xərçəng riski olmadığı amma bunun tədbir almaq üçün lazımlı olduğunu ifadə etdilər. Eyni zamanda məhsulların dadında hər hansı bir dəyişiklik olmayacağını söylədilər.
                </div>
            </div>
        </PageContainer>
    )
}