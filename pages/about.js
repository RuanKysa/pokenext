import Image from "next/image"
import styles from "../styles/About.module.css"

export default function About() {
    return (
        <>
            <div className={styles.fundo}>
                <div className={styles.about}>
                    <h1>Sobre o projeto</h1>
                    <p>
                        PokeNext é um site educacional focado no estudo e exploração do framework Next.js. Desenvolvido para fornecer recursos, tutoriais e exemplos práticos, PokeNext é a escolha ideal para desenvolvedores que desejam aprimorar suas habilidades em Next.js. O site inclui a integração com várias APIs para demonstrar o poder e a flexibilidade do Next.js em projetos do mundo real, permitindo que os usuários vejam exemplos concretos de como consumir e manipular dados de diversas fontes.
                    </p>
                    <Image src="/images/charizard.png" width="300" height="300" alt="Charizard" />
                </div>

                <div className={styles.devs}>
                    <div className={styles.ruan}>
                        <h1>Desenvolvedor</h1>
                        <Image className={styles.foto} src="/images/dev.jpg"
                            width="110"
                            height="110"
                            alt="Desenvolvedor" />
                        <ul>
                            <li>Ruan Kysa Mendes Bueno</li>
                            <li>19 anos</li>
                            <li>Cursando: Engenharia de Software</li>
                        </ul>
                    </div>
                    <div className={styles.pq}>
                        <h1>Porque estudar Next.js?</h1>
                        <ul>
                            <li>Renderização Híbrida (SSR e SSG)</li>
                            <li>Desempenho Aprimorado</li>
                            <li>Facilidade de Uso</li>
                            <li>API Routes Integradas</li>
                            <li>Grande Comunidade e Suporte</li>
                        </ul>
                    </div>
                </div>
            </div>
        </>

    )
}