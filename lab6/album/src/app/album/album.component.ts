import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, RouterLink} from "@angular/router";
import {AlbumsService} from "../albums.service";
import {Album} from "../../models";
import {NgIf} from "@angular/common";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-album',
  standalone: true,
  imports: [
    RouterLink,
    NgIf,
    FormsModule
  ],
  templateUrl: './album.component.html',
  styleUrl: './album.component.css'
})
export class AlbumComponent implements OnInit{
  album! : Album;
  loaded!: boolean;
  newTitle! : string;
  constructor(private route: ActivatedRoute,
              private albumsService: AlbumsService) {
  }

  ngOnInit(){
    this.loaded = false;
    this.route.paramMap.subscribe((params) => {
      if(params.get('id')) {
        const id = Number(params.get('id'));
        this.albumsService.getAlbum(id).subscribe((album) => {
          this.album = album;
          this.loaded = true;
        });
      }
    });
  }

  update(){
    this.album.title = this.newTitle;
    this.albumsService.updateAlbum(this.album).subscribe((album)=>{
      this.album = album;
      // this.ngOnInit();
    })
  }
}
