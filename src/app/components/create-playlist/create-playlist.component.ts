import { Component, OnInit } from '@angular/core';
import { MatDialogRef, MatSnackBar } from '@angular/material';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import Playlist from 'src/app/models/playlist.model';
import Song from 'src/app/models/song.model';
import { PlaylistsService } from 'src/app/services/playlists.service';

@Component({
  selector: 'create-playlist',
  templateUrl: './create-playlist.component.html',
  styleUrls: ['./create-playlist.component.scss']
})
export class CreatePlaylistComponent implements OnInit {
  playlist: Playlist;
  formGroup: FormGroup;
  playlistName = new FormControl('', [Validators.required])

  constructor(public dialogRef: MatDialogRef<CreatePlaylistComponent>, private playlistsService: PlaylistsService, private snackBar: MatSnackBar) {
    this.playlist = new Playlist();
    this.playlist.songs = new Array();
  }

  ngOnInit() {
    this.formGroup = new FormGroup({ "playlistName": this.playlistName });
    this.addSong();
  }

  createPlaylist() {
    if (!this.isValid())
      return;

    this.playlistsService.postPlaylist(this.playlist)
      .subscribe(r => { 
        this.openSnackBar(`Playlist '${this.playlist.name}' criada com sucesso`)
        this.closeDialog(true);
      }, (e) => console.log(e));
  }

  addSong() {
    this.playlist.songs.push(new Song())
  }

  closeDialog(result: boolean) {
    this.dialogRef.close(result);
  }

  isValid(): boolean {
    return this.formGroup.valid
  }

  private openSnackBar(message: string) {
    this.snackBar.open(message, 'Fechar', {
      duration: 2500,
      panelClass: ['snackbar-theme']
    })
  }
}