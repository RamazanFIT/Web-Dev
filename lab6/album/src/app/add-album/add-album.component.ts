import { Component } from '@angular/core';
import {Album} from "../../models";
import {FormsModule} from "@angular/forms";
import {AlbumsService} from "../albums.service";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-add-album',
  standalone: true,
  imports: [
    FormsModule,
    RouterLink
  ],
  templateUrl: './add-album.component.html',
  styleUrl: './add-album.component.css'
})
export class AddAlbumComponent {
  album! : Album;
  constructor(private albumsService: AlbumsService) {
    this.album = { title: '' , id : 0}; // Инициализация объекта album
  }
  add(){
    this.albumsService.addAlbum(this.album).subscribe();
    this.album = { title: '' , id : 0};
  }
}
