import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-barragem',
  templateUrl: './barragem.component.html',
  styleUrls: ['./barragem.component.css']
})
export class BarragemComponent implements OnInit {

  baseUrl: 'https://24994e42-e007-43b6-b9f6-eb2e92e23c9f.mock.pstmn.io';
  private barragens  = []; 

  constructor(private httpClient: HttpClient){}

  ngOnInit() {
  }

get_baragens(){
    this.httpClient.get(this.baseUrl + '/barragem/cadastrar').subscribe((res : any[])=>{
    console.log(res);
    this.barragens = res;
    });
  }

}
