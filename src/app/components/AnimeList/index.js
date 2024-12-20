import Image from "next/image"

const AnimeList = () => {
  return (
    <div>
        <div className="grid grid-cols-3 gap-2 h-32">
            <div className="bg-red-400">
                <Image src="https://placehold.co/600x400.png" width={600} height={400} alt="No Image" />
                <h3>JUDUL ANIME</h3>
            </div>
            <div className="bg-red-400">2</div>
            <div className="bg-red-400">3</div>
            <div className="bg-red-400">4</div>
            <div className="bg-red-400">5</div>
            <div className="bg-red-400">6</div>
            <div className="bg-red-400">7</div>
            <div className="bg-red-400">8</div>
            <div className="bg-red-400">9</div>
        </div>
    </div>
  )
}

export default AnimeList