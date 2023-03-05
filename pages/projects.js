import Repositories from "../components/Repositories";

import styles from '../styles/Home.module.scss'

function Projects() {
    return (
        <div className={styles.container}>
            <Repositories />
        </div> 
     );
}

export default Projects;