import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import Playlist from '../models/playlist.model';

@Injectable({
  providedIn: 'root'
})
export class PlaylistsService {
  private apiUrl: string = "https://spotihifunctions.azurewebsites.net/api"
  constructor(private httpClient: HttpClient) { }

  getPlaylists(): Observable<Playlist[]> {
    return this.httpClient.get<Playlist[]>(`${this.apiUrl}/Playlists`);
  }

  getPlaylist(id: string): Observable<Playlist> {
    return this.httpClient.get<Playlist>(`${this.apiUrl}/Playlists/${id}`);
  }

  postPlaylist(playlist: Playlist): Observable<any> {
    return this.httpClient.post<Playlist>(`${this.apiUrl}/Playlists`, playlist);
  }
}