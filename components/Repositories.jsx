import { FaRocket, FaGithub } from "react-icons/fa";
import styles from '../styles/Repository.module.scss'
import Image from 'next/image';
import imgEmmimovie from '../public/images/emmimovie.png'
import imgHouzellab from '../public/images/houzellab.png'
import imgTodoDo from '../public/images/todo-app.png'
import imgAdiceGenerator from '../public/images/adice-generator.png'
import restCountriesApi from '../public/images/rest-countries-api.png'
import Link from "next/link";

function Repositories() {

    const repos= [
        {img: imgEmmimovie, name: 'EmmiMovie', github: 'https://github.com/SarahBrito/emmi-movie', deploy: 'https://emmi-movie.vercel.app/'},
        {img: imgHouzellab, name: 'HouzelLab', github: 'https://github.com/Houzel-Lab/web', deploy: 'https://www.laboratoriohouzellab.com/'},
        {img: imgTodoDo, name: 'Todo-App', github: 'https://github.com/SarahBrito/todo-list', deploy: 'https://todo-fm.vercel.app/'},
        {img: imgAdiceGenerator, name: 'Advice Generator', github: 'https://github.com/SarahBrito/advice-generator', deploy: 'https://advice-generator-fm1.vercel.app/'},
        {img: restCountriesApi, name: 'Rest Coutries Api', github: 'https://github.com/SarahBrito/rest-countries-api', deploy: 'https://app-countries-api.vercel.app/'}
    ]
   
    return (
      
        <div className={styles.project__container}>
            <div className={styles.project__title}>
                <h2>Projetos</h2>
                <span></span>
            </div>
            <div className={styles.projects__items}>
                {repos.map((project, index)=>{
                    return (
                    <div key={index} className={styles.project__card}>
                        <section>
                            <Image 
                            src={project.img}
                            alt={"Capa projeto"}
                            className={styles.card__image}
                            />
                        <div className={styles.card__social}>
                            <h3>{project.name}</h3>
                            <div className={styles.card__social__icons} >
                                <Link href={project.github}><FaGithub className={styles.social__icon} size={20}/></Link>
                                <Link href={project.deploy}><FaRocket className={styles.social__icon} size={20}/></Link>
                            </div>
                        </div>
                        </section>
                    </div>
                    )
                })}
            </div>
    </div> 
     );
}

export default Repositories;
