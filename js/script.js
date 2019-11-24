// listing the playlist
const songs = [
    "bensound-allthat.mp3",
    "bensound-downtown.mp3",
    "bensound-groovyhiphop.mp3",
    "bensound-hipjazz.mp3",
    "bensound-retrosoul.mp3"
];

const createSongList = () => {
    const list = document.createElement('ol');

    for(let i = 0; i < songs.length; i++) {
        const item = document.createElement('li');
        item.appendChild(document.createTextNode(songs[i]));

        list.appendChild(item);
    }
    return list;
}

document.getElementById('songList').appendChild(createSongList());

// playing songs when clicked
songList.onclick = (e) => {
    const clickedItem = e.target;
    const source = document.getElementById('source');
    source.src = 'songs/' + clickedItem.innerText;
    
    // show currently playing song
    document.getElementById('currentlyPlaying').innerText = "Now Playing: ";
    document.getElementById('currentSong').innerText = clickedItem.innerText;

    player.load();
    player.play();
}

// play and pause the audio
const playAudio = () => {
    if(player.readyState) {
        player.play();
    }
}

const pauseAudio = () => {
    player.pause();
}