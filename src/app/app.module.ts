import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navigation/navbar/navbar.component';
import { MatButtonModule, MatIconModule, MatSnackBarModule, MatExpansionModule, MatFormFieldModule, MatInputModule, MatTableModule, MatDialogModule, MatProgressSpinnerModule } from '@angular/material';
import { PlaylistsListingComponent } from './components/playlists-listing/playlists-listing.component';
import { PlaylistsService } from './services/playlists.service';
import { HttpClientModule } from '@angular/common/http';
import { PlaylistComponent } from './components/playlists-listing/playlist/playlist.component';
import { CreatePlaylistComponent } from './components/create-playlist/create-playlist.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AddMusicComponent } from './components/create-playlist/add-music/add-music.component';
import { BusyIndicatorComponent } from './components/busy-indicator/busy-indicator.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    PlaylistsListingComponent,
    PlaylistComponent,
    CreatePlaylistComponent,
    AddMusicComponent,
    BusyIndicatorComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatSnackBarModule,
    MatExpansionModule,
    MatInputModule,
    MatFormFieldModule,
    MatTableModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatProgressSpinnerModule
  ],
  providers: [ PlaylistsService ],
  bootstrap: [AppComponent],
  entryComponents: [ CreatePlaylistComponent ]
})
export class AppModule { }
