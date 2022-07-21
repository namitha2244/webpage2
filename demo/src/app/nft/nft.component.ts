import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-nft',
  templateUrl: './nft.component.html',
  styleUrls: ['./nft.component.scss']
})
export class NftComponent implements OnInit {
  nft1:any=[] ;
  data1:any;

  constructor(private user:ApiService){
    this.user.getData().subscribe(data=>{
      console.log("nft data : ",data)
      this.data1=data;
    })
  }
  ngOnInit(): void {
    this.nft1={
      "root":{
        "key": 4 
            
}
    }
    this.nft1 = JSON.stringify(this.nft1);
  }

  searchText: any = '';
  onSearchTextEntered(searchValue: any){
    console.log("event : ", searchValue)
    this.user.apicall(searchValue).subscribe((result:any)=>
    {console.log("result",result);
    this.data1=result;
  })
    this.searchText = searchValue;
    console.log(this.searchText);
  }

}
// *ngIf="searchText === '' || data1.tokenInfo.tokenAuthority.toLowerCase().includes(searchText.toLowerCase())"