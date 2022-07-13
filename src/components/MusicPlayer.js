import { useEffect, useState } from "react";

const MusicPlayer = () => {

    const [songs, Setsongs] = useState()

    async function fetchSong() {
        const res = await fetch("https://lofi-api.azurewebsites.net/music");
        const data = await res.json();
        console.log(data);
        Setsongs(data)
      }

    const handleMusic = () => {
        let audio = new Audio(songs[0].musicURL)
        console.log(audio)
        audio.volume = 0.2
        audio.play()
    }

      useEffect(() => {
        fetchSong()
      },[])

      return(
        <div>
            <span onClick={handleMusic} class="material-icons">play_arrow</span>
        </div>
      )

}


export default MusicPlayer