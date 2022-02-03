class Song {
    constructor(title, artist){
        this.title = title;
        this.artist = artist;
        this.listeners = [];
    }

   howMany(dailyListeners){
        let newListeners = 0;
        for (let i = 0; i < dailyListeners.length; i++) {
            if (!this.listeners.includes(dailyListeners[i].toLowerCase())) {
                newListeners++;
                this.listeners.push(dailyListeners[i].toLowerCase());
            }
        }
        return newListeners;
    }
}

let mountMoose = new Song('Mount Moose', 'The Snazzy Moose');

module.exports = { mountMoose };


