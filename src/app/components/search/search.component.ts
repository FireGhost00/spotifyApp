import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent  {
artista: any[]=[];
loadding: boolean;
  constructor(private spotify: SpotifyService) { }
  buscar(termino: string){
this.loadding = true;
    console.log(termino);
     this.spotify.getArtistas(termino).subscribe((data: any) =>{
     console.log(data);
     this.artista = data;
     this.loadding= false;
    });
   }
 }
