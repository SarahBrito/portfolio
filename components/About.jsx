import styles from '../styles/About.module.css'
import {DiHtml5, DiCss3, DiGit, DiReact, DiJsBadge} from "react-icons/di"

function About() {
    return (
        <section className={styles.about}>
            <div className={styles.about__description}>
                <div className={styles.about__title}>
                    <h2>Sobre</h2>
                    <span></span>
                </div>
                <p>Olá! Meu nome é Sara, sou graduanda em Análise e Desenvolvimento de Sistemas. 
                Atualmente focada em desenvolvimento Front-end (HTML, CSS, Javascript e React).
                </p>
            </div>
            <div className={styles.about__techs}>
                <div className={styles.about__title}>
                    <h2>Tecnologias</h2>
                    <span></span>
                </div>
                <div className={styles.about__techs__icons}>
                    <DiHtml5 className={styles.techs__icon} color={'#E65100'}/>
                    <DiCss3 className={styles.techs__icon} color={'#0277BD'}/>
                    <DiJsBadge className={styles.techs__icon} color={'#F7DF1E'}/>
                    <DiReact className={styles.techs__icon} color={'#80DEEA'}/>
                    <DiGit className={styles.techs__icon} color={'#F4511E'}/>
                </div>
               
            </div>
            
        </section> 
     );
}

export default About;