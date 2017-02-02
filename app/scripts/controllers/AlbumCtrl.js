(function(){


function AlbumCtrl(Fixtures, SongPlayer) {

    this.albumData = Fixtures.getAlbum();
    this.songPlayer = SongPlayer;
}

    angular
        .module('blocJams')
        .controller('AlbumCtrl', ['Fixtures', 'SongPlayer', AlbumCtrl]);
    
})();

/*
for (var i=0; i<10; i++) {
    
}

// ng-repeat="song in songs"
for (var songIndex = 0; songIndex <= songs.length; songIndex++) {
    var song = songs[singIndex];
    
    var elem = new Document.element();
}
*/