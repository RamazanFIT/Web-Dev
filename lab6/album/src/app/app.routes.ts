import { Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {AlbumComponent} from "./album/album.component";
import {AlbumsComponent} from "./albums/albums.component";
import {AboutComponent} from "./about/about.component";
import {PhotosComponent} from "./photos/photos.component";
import {AddAlbumComponent} from "./add-album/add-album.component";

export const routes: Routes = [

  // {path: , component: , title: }
  {path:'', redirectTo: 'home', pathMatch: 'full'},
  {path: "home" , component: HomeComponent, title: "Home"},
  {path: "albums", component: AlbumsComponent, title: "Albums" },
  {path: "albums/add", component: AddAlbumComponent, title: "Add"},
  {path: "albums/:id", component: AlbumComponent, title: "Album" },
  {path: "about", component: AboutComponent, title: "About"},
  {path: "albums/:id/photos", component: PhotosComponent, title: "Photos"},

];
