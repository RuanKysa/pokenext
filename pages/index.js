import styles from "@/styles/Home.module.css";
import Image from "next/image";

export async function getStaticProps() {

  const maxPokemons = 251
  const api = 'https://pokeapi.co/api/v2/pokemon/'

  const res = await fetch(`${api}/?limit=${maxPokemons}`)
  const data = await res.json()

  // add pokemon index

  data.results.forEach((item, index) => {
    item.id = index + 1
  })

  return {
    props: {
      pokemons: data.results,
    },
  }
}

export default function Home({pokemons}) {
  return (<div>
    <div>
    <h1>Poke<span>Next</span></h1>
    <Image src="/images/pokeball.png" width="50" height="50" alt="PokeNext" />
    </div>
    <div className={styles.container}>
    <ul>
      {pokemons.map((pokemon) => (
        <p key={pokemon.id}>{pokemon.name}</p>))}
    </ul>
    </div>
  </div>
  );
}
