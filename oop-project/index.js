// ================ SONG CLASS ================

class Song {
  constructor(title, artist, duration) {
    this.title = title;
    this.artist = artist;
    this.duration = duration;
    this.rating = null;
  }

  rateSong(rating) {
    if (rating < 1 || rating > 5) {
      console.log("Rating must be between 1 and 5");
      return;
    }

    this.rating = rating;
    console.log(`"${this.title}" rated ${rating}/5`);
  }

  displayInfo() {
    const ratingInfo = this.rating ? `Rating: ${this.rating}/5` : "Not rated";

    console.log(
      `${this.title} by ${this.artist} (${this.duration}) - ${ratingInfo}`,
    );
  }
}

// ================ PLAYLIST CLASS ================

class Playlist {
  constructor(name) {
    this.name = name;
    this.songs = [];
  }

  addSong(song) {
    this.songs.push(song);
    console.log(`Added "${song.title}" to playlist "${this.name}"`);
  }

  displaySongs() {
    console.log(`\nPlaylist: ${this.name}`);
    this.songs.forEach((song, index) => {
      console.log(`${index + 1}. ${song.title} - ${song.artist}`);
    });
  }

  removeSong(songTitle) {
    const originalLength = this.songs.length;

    this.songs = this.songs.filter((song) => song.title !== songTitle);

    if (this.songs.length < originalLength) {
      console.log(`Removed "${songTitle}" from "${this.name}"`);
    } else {
      console.log(`Song "${songTitle}" not found in "${this.name}"`);
    }
  }

  shuffle() {
    for (let i = this.songs.length - 1; i > 0; i--) {
      const randomIndex = Math.floor(Math.random() * (i + 1));
      [this.songs[i], this.songs[randomIndex]] = [
        this.songs[randomIndex],
        this.songs[i],
      ];
    }

    console.log(`Playlist "${this.name}" has been shuffled`);
  }
}

// ================ USER CLASS ================

class User {
  constructor(name) {
    this.name = name;
    this.playlists = [];
  }

  createPlaylist(playlist) {
    this.playlists.push(playlist);
    console.log(`${this.name} created a new playlist: ${playlist.name}`);
  }

  displayPlaylists() {
    console.log(`\n${this.name}'s Playlists:`);
    this.playlists.forEach((playlist, index) => {
      console.log(`${index + 1}. ${playlist.name}`);
    });
  }
}

// ================ TESTS ================

const song1 = new Song("Humble", "Kendrick Lamar", "2:57");
song1.displayInfo();

const playlist1 = new Playlist("My Favorites");

playlist1.addSong(song1);

const song2 = new Song("Blinding Lights", "The Weeknd", "3:20");
playlist1.addSong(song2);

playlist1.displaySongs();

const user1 = new User("Ibrahim");

user1.createPlaylist(playlist1);
user1.displayPlaylists();

// Test song removal
playlist1.removeSong("Humble");
playlist1.displaySongs();

// Test shuffle
playlist1.shuffle();
playlist1.displaySongs();

// Rating
song2.rateSong(5);
song2.displayInfo();
song2.rateSong(10);
