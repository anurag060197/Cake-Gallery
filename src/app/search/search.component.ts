import { query } from "@angular/animations";
import { HttpClient } from "@angular/common/http";
import {Component} from "@angular/core"
import { ActivatedRoute } from "@angular/router";
import { NgxUiLoaderService } from "ngx-ui-loader";

@Component({
  selector:"app-search",
  templateUrl:"./search.component.html"  
})
export class SearchComponent{
  searchResult : any =[]
  query: any;
  constructor( private route : ActivatedRoute, private http: HttpClient, private loader: NgxUiLoaderService) {
    this.loader.start();

    this.route.queryParams.subscribe((query)=>{
      this.query = query.q;
      var url = "https://apifromashu.herokuapp.com/api/searchcakes?q="+query.q;
      this.http.get(url).subscribe((response: any)=>{
        console.log("Searched "+ response);
        this.searchResult = response.data;
        this.loader.stop();
      }, (err)=>{
        this.loader.stop();
        console.log('Error from search '+ err );
        
      })
    })
  }
}