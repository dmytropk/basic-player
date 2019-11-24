const songs = [
    "bensound-allthat.mp3",
    "bensound-downtown.mp3",
    "bensound-groovyhiphop.mp3",
    "bensound-hipjazz.mp3",
    "bensound-retrosoul.mp3"
]

const createSongList = () => {
    const list = document.createElement('ol')

    for(let i = 0; i < songs.length; i++) {
        const item = document.createElement('li')
        item.appendChild(document.createTextNode(songs[i]))

        list.appendChild(item)
    }
    return list
}

document.getElementById('songList').appendChild(createSongList())