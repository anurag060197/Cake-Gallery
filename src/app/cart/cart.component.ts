import { Component, OnInit,EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  @Output() phone = new EventEmitter();

  checkOut(){
    this.phone.emit()
  }

  incrQty(i: any) {
    if(this.items[i].qty < 3)
      this.items[i].qty = this.items[i].qty + 1;
  }

  decrQty(i: any) {
    if(this.items[i].qty > 1)
      this.items[i].qty = this.items[i].qty - 1;
  }

  items : any = [{
    name: "Black Forest Cake",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEIAvXL53Ys_B6eC0jF-nWOFFEs-nKJVf3unAep8Cwt-QL8cWhB_sWtIGixxf3-Tb-xLo&usqp=CAU",
    price: 749,
    qty: 1
  },{
    name: "Rainbow Cake",
    image: "https://storcpdkenticomedia.blob.core.windows.net/media/recipemanagementsystem/media/recipe-media-files/recipes/retail/desktopimages/rainbow-cake600x600_2.jpg?ext=.jpg",
    price: 699,
    qty: 1
  },{
    name: "Chocolate Cake",
    image: "https://www.fnp.com/images/pr/l/v20200707214933/chocolate-fudge-cake-1-kg_1.jpg",
    price: 589,
    qty: 1
  }]

  constructor() { }

  ngOnInit(): void {
  }

}
