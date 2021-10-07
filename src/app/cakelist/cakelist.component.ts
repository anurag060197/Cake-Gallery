import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgxUiLoaderService } from 'ngx-ui-loader';

@Component({
  selector: 'app-cakelist',
  templateUrl: './cakelist.component.html',
  styleUrls: ['./cakelist.component.css']
})
export class CakelistComponent implements OnInit {
  cakes : any = []
  constructor(private http: HttpClient, private loader: NgxUiLoaderService) { 
    this.loader.start()

    var url = 'http://apifromashu.herokuapp.com/api/allcakes';
    this.http.get(url).subscribe((response: any)=>{
      this.loader.stop();
      console.log("response from all cakes : " + response);
      this.cakes = response.data;
    },(err)=>{
      this.loader.stop();
      console.log("Error "+ err);
    })
  }

  ngOnInit(): void {
  }

}

// {
//   name : 'Vanila Cake',
//   image : 'https://5.imimg.com/data5/SS/IF/MY-39025286/vanilla-cake-500x500.jpg',
//   price : 549
// },{
//   name : 'Red Velvet Cake',
//   image : 'https://cdn.shopify.com/s/files/1/1758/8043/products/RedVelvetCake_x700.jpg?v=1606134743',
//   price : 789,
// },{
//   name: "Black Forest Cake",
//   image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEIAvXL53Ys_B6eC0jF-nWOFFEs-nKJVf3unAep8Cwt-QL8cWhB_sWtIGixxf3-Tb-xLo&usqp=CAU",
//   price: 749
// },{
//   name: "Rainbow Cake",
//   image: "https://storcpdkenticomedia.blob.core.windows.net/media/recipemanagementsystem/media/recipe-media-files/recipes/retail/desktopimages/rainbow-cake600x600_2.jpg?ext=.jpg",
//   price: 699
// },{
//   name: "Chocolate Cake",
//   image: "https://www.fnp.com/images/pr/l/v20200707214933/chocolate-fudge-cake-1-kg_1.jpg",
//   price: 589
// },{
//   name: "Rainbow Cake",
//   image: "https://storcpdkenticomedia.blob.core.windows.net/media/recipemanagementsystem/media/recipe-media-files/recipes/retail/desktopimages/rainbow-cake600x600_2.jpg?ext=.jpg",
//   price: 699
// },{
//   name : 'Red Velvet Cake',
//   image : 'https://cdn.shopify.com/s/files/1/1758/8043/products/RedVelvetCake_x700.jpg?v=1606134743',
//   price : 789,
// },{
//   name : 'Vanila Cake',
//   image : 'https://5.imimg.com/data5/SS/IF/MY-39025286/vanilla-cake-500x500.jpg',
//   price : 549
// },{
//   name: "Black Forest Cake",
//   image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEIAvXL53Ys_B6eC0jF-nWOFFEs-nKJVf3unAep8Cwt-QL8cWhB_sWtIGixxf3-Tb-xLo&usqp=CAU",
//   price: 749
// }