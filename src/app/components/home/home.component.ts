import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { CreatePlaylistComponent } from '../create-playlist/create-playlist.component';
import { PlaylistsService } from 'src/app/services/playlists.service';
import Playlist from 'src/app/models/playlist.model';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  playlists: Playlist[];
  isBusy: boolean = false;

  constructor(private dialog: MatDialog, private playlistsService: PlaylistsService) { }

  ngOnInit() {
    this.getPlaylists();
  }

  openCreatePlaylistDialog() {
    const dialogRef = this.dialog.open(CreatePlaylistComponent, {
      width: '500px'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result)
        this.getPlaylists();
    });
  }

  private getPlaylists() {
    this.isBusy = true;
    this.playlistsService
      .getPlaylists()
      .subscribe(r => {
        this.playlists = r
      }, () => console.log('Error'), () => this.isBusy = false);
  }
}