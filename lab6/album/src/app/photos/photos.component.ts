import {Component, OnInit} from '@angular/core';
import {Album, Photo} from "../../models";
import {ActivatedRoute, RouterLink} from "@angular/router";
import {AlbumsService} from "../albums.service";
import {NgForOf, NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-photos',
  standalone: true,
  imports: [
    NgForOf,
    RouterLink,
    NgOptimizedImage
  ],
  templateUrl: './photos.component.html',
  styleUrl: './photos.component.css'
})
export class PhotosComponent implements OnInit{
  photos! : Photo[];
  id! : number;
  constructor(private route: ActivatedRoute,
              private albumsService: AlbumsService) {
  }

  ngOnInit(){
    this.route.paramMap.subscribe((params) => {
      if(params.get('id')) {
        const id = Number(params.get('id'));
        this.id = id;
        this.albumsService.getAlbumPhotosById(id).subscribe((photos) => {
          this.photos = photos;
        });
      }
    });
  }
}
