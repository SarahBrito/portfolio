import { FaRocket, FaGithub } from "react-icons/fa";
import styles from '../styles/Repository.module.css'
import Image from 'next/image';
import img1 from '../public/images/emmimovie.png'
import img2 from '../public/images/houzellab.png'

function Repositories() {

    const repos= [
        {img: img1, name: 'EmmiMovie', url: 'https://github.com/SarahBrito/emmi-movie', homepage: 'https://emmi-movie.vercel.app/'},
        {img: img2, name: 'HouzelLab', url: 'https://github.com/Houzel-Lab/web', homepage: 'https://www.laboratoriohouzellab.com/'}
    ]
   
    return (
      
             <div className={styles.repositories}>
                {repos.map(repo =>{
                   return (
                    <div className={styles.repository} key={repo.name}>
                        <div className={styles.repository__image__container}>
                            <a href={repo.homepage} target="_blank" rel="noopener noreferrer">
                                <Image
                                    className={styles.repository__image} 
                                    src={repo.img}
                                    alt={repo.name}
                                />
                            </a>
                        </div>
                        <h2 className={styles.repository__title}>{repo.name}</h2>
                        <divc className={styles.repository__links}>
                            <a href={repo.url} target="_blank" rel="noopener noreferrer">
                                <FaGithub className={styles.repository__links__icon} />
                            </a>
                            <a href={repo.homepage} target="_blank" rel="noopener noreferrer">
                                <FaRocket className={styles.repository__links__icon} />
                            </a>
                        </divc>
                        
                    </div>
                   )
                })}
             </div>      
        
     );
}

export default Repositories;