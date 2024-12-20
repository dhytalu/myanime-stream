import AnimeList from "./components/AnimeList"

const Home = async() => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/top/anime`)
  const anime = awaitresponse.json()
  console.log(anime)

  return (
    <div>
      <h1>Anime Populer</h1>
      <AnimeList />
    </div>
  )
}

export default Home