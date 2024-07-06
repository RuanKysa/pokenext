import Image from "next/image"
import styles from "../styles/About.module.css"

export default function About(){
    return(
        <div className={styles.about}>
            <h1>Sobre o projeto</h1>
            <p>
                O projeto foi desenvolvido com o intuito de ajudar pessoas que não possuem conhecimento 
                em programação a criar seus próprios sites, sem a necessidade de ter conhecimento em
                programação. O projeto foi desenvolvido com o framework NextJS, que é um framework
                de desenvolvimento de aplicações web baseado em ReactJS, e o banco de dados
                foi desenvolvido com o MongoDB, que é um banco de dados orientado a documentos.
            </p>
            <Image src="/images/charizard.png" width="300" height="300" alt="Charizard" />

        </div>

    )
}