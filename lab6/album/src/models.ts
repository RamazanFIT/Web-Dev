import {AlbumsService} from "./app/albums.service";

export interface Album {
  id : number,
  title : string
}


export interface Photo {
  id : number,
  title : string,
  url : string,
  thumbnailUrl : string
}

