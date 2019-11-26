import { Component, OnInit, Input } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import Song from 'src/app/models/song.model';
import Artist from 'src/app/models/artist.model';

@Component({
  selector: 'add-music',
  templateUrl: './add-music.component.html',
  styleUrls: ['./add-music.component.scss']
})
export class AddMusicComponent implements OnInit {
  @Input()
  song: Song;
  
  @Input()
  formGroup: FormGroup;

  songName = new FormControl('', [Validators.required]);
  artistName = new FormControl('', [Validators.required]);

  constructor() { }

  ngOnInit() {
    this.formGroup.addControl("songName", this.songName);
    this.formGroup.addControl("artistName", this.artistName);

    if (!this.song)
      this.song = new Song();
    if (!this.song.artist)
      this.song.artist = new Artist();
  }
}
