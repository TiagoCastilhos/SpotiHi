import Song from './song.model';

export default class Playlist {
    id: string;
    songs: Song[];
    name: string;
    creationDate: Date;
}