import Link from 'next/link'
import Image  from 'next/image';
import avatar from '../public/images/eu.png'

import { FaLinkedinIn, FaGithub, FaInstagram, FaDownload} from 'react-icons/fa'
import { MdPhoneAndroid, MdLocationPin, MdOutlineEmail } from 'react-icons/md'
import styles from '../styles/Profile.module.scss'
import BtnPdf from "./BtnPdf";

function Profile() {

    return ( 
        <aside className={styles.profile}>
                <div className={styles.profile__avatar}>
                    <Image 
                        className={styles.profile__image}
                        src={avatar}
                        alt="Picture of the author"
                        width={250}
                        height={250}
                    />
                    <p className={styles.profile__title}>Front-end Developer</p>
                    <span></span>
                </div>
                <div className={styles.profile__social}>
                    <Link href='https://github.com/SarahBrito'>
                        <a className={styles.social__item} target="_blank" rel="noopener noreferrer"><
                            FaGithub size={20}color={'#fff'}/>
                        </a>
                    </Link>
                    <Link href='https://www.linkedin.com/in/sara-brito-49312a211/'>
                        <a className={styles.social__item} target="_blank" rel="noopener noreferrer">
                            <FaLinkedinIn size={20} color={'#0072B1'} />
                        </a>
                    </Link>     
                    <Link href='https://www.instagram.com/sara_bds_/'>
                        <a className={styles.social__item} target="_blank" rel="noopener noreferrer">
                            <FaInstagram size={20} color={'#E14A84'} />
                        </a>
                    </Link>
                </div>

                <div className={styles.profile__contact}>
                    <div className={`${styles.about__personalInfo__item} ${styles.phone}`}>
                        <span className={styles.info__icon}><MdPhoneAndroid size={25} color={'#E14A84'}/></span>
                        <span className={styles.info__title}>Telefone</span>
                        <span className={styles.info__description}>(88) 99948 - 4272</span>
                    </div>
                    <div className={`${styles.about__personalInfo__item} ${styles.location}`}>
                        <span className={styles.info__icon}><MdLocationPin size={25} color={'#0072B1'}/></span>
                        <span className={styles.info__title}>Localização</span>
                        <span className={styles.info__description}>Juazeiro do Norte - CE</span>
                    </div>
                    <div className={`${styles.about__personalInfo__item} ${styles.email}`}>
                        <span className={styles.info__icon}><MdOutlineEmail size={25} color={'#4cc9f0'}/></span>
                        <span className={styles.info__title}>Email</span>
                        <span className={styles.info__description}>sarabritodiasdasilva@gmail.com</span>
                    </div>
                </div>
                <BtnPdf />
        </aside>
    )
}

export default Profile;