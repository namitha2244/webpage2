import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }
  getData()
  {
    let url="https://public-api.solscan.io/account/HApYGyDHo1pCUjvnyvWMzzNtELxmUomBzaM6h4KcoPuS";
    return this.http.get(url);
  }
  apicall(searchValue:any)
  {
    return this.http.get(`https://public-api.solscan.io/account/${searchValue}`);
  }

  
}
