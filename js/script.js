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

// volume slider
const slider = document.getElementById('volumeSlider');
slider.oninput = (e) => {
    const volume = e.target.value;
    player.volume = volume;
}

// progress bar
const updateProgress = () => {
    // const progressBar = document.getElementById('progress');
    // debugging (Failed to set the 'value' property on 'HTMLProgressElement')
    // console.log(progressBar.value + "progress bar value");
    // console.log(player.currentTime + "current time");
    // console.log(player.duration + "duration");

    // progressBar.value = (player.currentTime / player.duration) * 100;
    if(player.currentTime > 0) {
        const progressBar = document.getElementById('progress');
        progressBar.value = (player.currentTime / player.duration) * 100;
    }
}