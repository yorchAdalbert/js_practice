const addSongs = () => {
    let song1 = document.getElementById('song1');
    let song2 = document.getElementById('song2');
    let song3 = document.getElementById('song3');

    song1.innerHTML = 'Blue Suede Strings, By Elvis Pagely';
    song2.innerHTML = 'Great objects on fire, By Jerry JSON Lewis';
    song3.innerHTML = 'I code the line, By Johnny JavaScript';
};

window.onload = addSongs;