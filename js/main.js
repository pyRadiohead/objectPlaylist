;
(function () {
    const playList = [{
            "duration": "2:03",
            "artist": "Genesis",
            "song": "Mama"
        },
        {
            "duration": "2:16",
            "artist": "Linking Park",
            "song": "In The End"
        },
        {
            "duration": "5:03",
            "artist": "The Chemical Romance",
            "song": "The Ghost of you"
        },
        {
            "duration": "5:03",
            "artist": "The Chemical Romance",
            "song": "The Ghost of you"
        },

        {
            "duration": "5:03",
            "artist": "The Chemical Romance",
            "song": "The Ghost of you"
        },
        {
            "duration": "5:03",
            "artist": "The Chemical Romance",
            "song": "The Ghost of you"
        },
        {
            "duration": "5:03",
            "artist": "The Chemical Romance",
            "song": "The Ghost of you"
        }




    ];
    const playListUl = document.querySelector('.ba-playlist-favourite');
    const liTmplt = document.getElementById('li-tmpl').innerHTML;
    let musicComposition = '';
    playListUl.innerHTML = '';
    playList.forEach(function (musicComposition) {
        musicComposition = liTmplt
            .replace(/{{artist}}/ig, musicComposition.artist)
            .replace(/{{duration}}/ig, musicComposition.duration + ' | ')
            .replace(/{{song}}/ig, musicComposition.song);

        playListUl.innerHTML += musicComposition;
    });


})();