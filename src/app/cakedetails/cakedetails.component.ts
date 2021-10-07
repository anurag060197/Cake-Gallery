import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { url } from 'inspector';
import { NgxUiLoaderService } from 'ngx-ui-loader';


@Component({
  selector: 'app-cakedetails',
  templateUrl: './cakedetails.component.html',
  styleUrls: ['./cakedetails.component.css']
})
export class CakedetailsComponent implements OnInit {
  cake: any; 
  //={"owner":{"email":"harshit199dubey@gmail.com","name":"Harshit Dubey"},"description":"A special Birthday cake for a party of 20 people.","createdat":"2021-06-07T13:28:12.641Z","likes":10,"ratings":4.5,"reviews":100,"type":"Birthday","flavour":"Chocolate","eggless":true,"ingredients":["Chocolate","milk","butter","granulated sugar"],"_id":"60be2d3548235b00225a71c7","name":"Chocolate Cake","price":500,"weight":2,"image":"https://res.cloudinary.com/ashudev/image/upload/v1623076144/x6svihz4ldsybxj5r3t1.jpg","cakeid":1623076149741,"__v":0}
  constructor( private route : ActivatedRoute,private router: Router, private http: HttpClient, private loader: NgxUiLoaderService) {
    var cakeid = this.route.snapshot.params.cakeid;

    var url = "https://apifromashu.herokuapp.com/api/cake/"+cakeid;
    this.loader.start();
    this.http.get(url).subscribe((response: any)=>{
      console.log("Cakedetails ", response.data);
      this.cake = response.data;
      this.loader.stop();
    }, (err)=>{
      this.loader.stop();
      console.log('Error from cake datails '+ err );
      
    })
  }


   addToCart(){
    if(localStorage.token){
      var rqstObj = {
        name:this.cake.name,
        price:this.cake.price,
        weight:this.cake.weight,
        image:this.cake.image,
        cakeid:this.cake.cakeid, 
      }
      var headers = new HttpHeaders;
      headers = headers.append("authtoken", localStorage.token);
      var apiurl = "https://apifromashu.herokuapp.com/api/addcaketocart"
      this.http.post(apiurl, rqstObj, {headers: headers}).subscribe((response: any)=>{
        console.log("Response from add tocart "+response);
        if(response.data)
          this.router.navigate(['/cart']);
        
      }, (err)=>{
        console.log("Error from add to cart "+ err);
        
      }) 
    }
    else{
      this.router.navigate(["/login"])
    }

   }

  ngOnInit(): void {
  }

}
