let song = {
    name: 'Walk this way',
    artist: 'Run-D.M.C',
    minutos: 4,
    seconds: 3,
    genre: '80s',
    playing: false,
    play: function () {
        if (!this.playing) {
            this.playing = true;
            console.log('Playing ' + this.name);
        };
    },
    pause: function() {
        if (this.playing)
            this.playing = false;
    }
};

song.play();
song.pause();

console.log(song.playing);