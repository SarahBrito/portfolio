import { useRouter } from "next/router"
import Link from 'next/link'
import Image  from 'next/image';
import avatar from '../public/images/eu.jpeg'
import { RiLinkedinBoxFill, RiGithubFill, RiInstagramFill, 
        RiPhoneFill, RiMailFill, RiMapPin2Fill } from "react-icons/ri";


import styles from '../styles/Profile.module.css'

function Profile() {

   
    return ( 
        <aside className={styles.profile}>
                <div className={styles.profile__avatar}>
                    <Image 
                        className={styles.profile__image}
                        src={avatar}
                        alt="Picture of the author"
                    />
                    <p className={styles.profile__title}>Front-end Developer</p>
                    <span></span>
                </div>
                <div className={styles.profile__social}>
                    <a href="https://www.linkedin.com/in/sara-brito-49312a211/" target="_blank" rel="noopener noreferrer">
                        <RiLinkedinBoxFill size={30} className={styles.profile__social__icon}/>
                    </a>
                    <a href="https://github.com/SarahBrito" target="_blank" rel="noopener noreferrer">
                        <RiGithubFill size={30} className={styles.profile__social__icon}/>
                    </a>
                    <a href="https://www.instagram.com/sara_bds_/" target="_blank" rel="noopener noreferrer">
                        <RiInstagramFill size={30} className={styles.profile__social__icon}/>
                    </a>
                </div>

                <div className={styles.profile__contact}>
                    <div className={styles.profile__contact__phone}>
                        <RiPhoneFill size={25} color={'#ff595e'}/> <span>(88) 99948-4272</span>
                    </div>
                    <div className={styles.profile__contact__email}>
                        <RiMailFill size={25} color={'#6a4c93'}/> <span>sarabritodiasdasilva@gmail.com</span>
                    </div>
                    <div className={styles.profile__contact__localization}>
                        <RiMapPin2Fill size={25} color={'#1982c4'}/> <span>Juazeiro do Norte - CE</span>
                    </div>

                    <Link  href="/projects"><a className={styles.button__projects} target="_blank" rel="noopener noreferrer">Projetos</a></Link>
                </div>

        </aside>
    )
}

export default Profile;