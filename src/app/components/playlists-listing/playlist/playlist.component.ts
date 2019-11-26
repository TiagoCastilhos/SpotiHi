import { Component, OnInit, Input } from '@angular/core';
import Playlist from 'src/app/models/playlist.model';

@Component({
  selector: 'playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.scss']
})
export class PlaylistComponent implements OnInit {
  @Input()
  playlist: Playlist;
  
  displayedColumns = ['musica', 'artista'];
  
  constructor() { }

  ngOnInit() {
  }
}