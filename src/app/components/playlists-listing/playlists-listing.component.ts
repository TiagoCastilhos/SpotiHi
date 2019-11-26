import { Component, OnInit, Input } from '@angular/core';
import { PlaylistsService } from 'src/app/services/playlists.service';
import Playlist from 'src/app/models/playlist.model';

@Component({
  selector: 'playlists-listing',
  templateUrl: './playlists-listing.component.html',
  styleUrls: ['./playlists-listing.component.scss']
})
export class PlaylistsListingComponent implements OnInit {
  @Input()
  playlists: Playlist[];

  constructor() { }

  ngOnInit() {}
}