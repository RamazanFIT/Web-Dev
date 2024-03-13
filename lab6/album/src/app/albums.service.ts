import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Album, Photo} from "../models";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AlbumsService {


  constructor(private client: HttpClient) { }

  linkAPI : string = 'http://127.0.0.1:8000/api/album/';

  getAlbums(): Observable<Album[]>{
    return this.client.get<Album[]>(this.linkAPI);
  }

  getAlbumPhotosById(id : number) : Observable<Photo[]>{
    return this.client.get<Photo[]>(`https://jsonplaceholder.typicode.com/albums/${id}/photos`);
  }

  getAlbum(id : number): Observable<Album>{
    return this.client.get<Album>(this.linkAPI + id + '/');
  }

  updateAlbum(album : Album){
    return this.client.put<Album>(this.linkAPI + album.id + "/", album);
  }

  deleteAlbum(id: number) {
    return this.client.delete(`${this.linkAPI}${id}/`);

  }

  addAlbum(album : Album){
    return this.client.post<Album>(this.linkAPI, album);

  }

}
