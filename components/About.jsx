import styles from '../styles/About.module.scss'
import {SiNextdotjs, SiJavascript, SiTypescript, SiGit, SiSass, SiReact} from 'react-icons/si'

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
                <div className={styles.about__skills}>
                    <div className={`${styles.skill__icon} ${styles.react}`}>
                        <SiReact size={60}/>
                    </div>
                    <div className={`${styles.skill__icon} ${styles.next}`}>
                        <SiNextdotjs size={60}/>
                    </div>
                    <div className={`${styles.skill__icon} ${styles.javascript}`}>
                        <SiJavascript size={60}/>
                    </div>
                    <div className={`${styles.skill__icon} ${styles.typescript}`}>
                        <SiTypescript size={60}/>
                    </div>
                    <div className={`${styles.skill__icon} ${styles.git}`}>
                        <SiGit size={60}/>
                    </div>
                    <div className={`${styles.skill__icon} ${styles.scss}`}>
                        <SiSass size={60}/>
                    </div>
                </div>
               
            </div>
            </section> 
        
     );
}

export default About;