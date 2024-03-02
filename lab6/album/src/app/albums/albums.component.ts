import {Component, OnDestroy, OnInit} from '@angular/core';
import {Album} from "../../models";
import {AlbumsService} from "../albums.service";
import {RouterLink} from "@angular/router";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-albums',
  standalone: true,
  imports: [
    RouterLink,
    NgForOf
  ],
  templateUrl: './albums.component.html',
  styleUrl: './albums.component.css'
})
export class AlbumsComponent implements OnInit, OnDestroy{
  albums! : Album[];

  constructor(private albumService: AlbumsService) {
  }
  ngOnDestroy(): void {
  }

  ngOnInit(): void {
    this.albumService.getAlbums().subscribe((albums)=>{
      this.albums = albums;
    });
  }

  deleteIt(id : number){
    this.albumService.deleteAlbum(id).subscribe(
      () => {
        this.ngOnInit();
      }
    );
  }

  addAlbum() {

  }
}
