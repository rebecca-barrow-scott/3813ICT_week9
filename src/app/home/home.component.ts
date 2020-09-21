import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProdService } from '../prod.service';
import { ProdModel } from '../ProdModel';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  prods: ProdModel[];
  prod = new ProdModel
  constructor(private prodService: ProdService, private router: Router) { }

  ngOnInit(): void {
    this.getProducts();
  }
  getProducts(): void{
    this.prodService.productFind().subscribe(data => {
      this.prods = data
    });
  };
  deleteAll(): void{
    this.prodService.resetdb().subscribe(data => {})
    window.location.reload()
  }
  //Ask if this deletes the product using mongo id
  deleteProd(prod){
    this.prod.mdb_id = prod._id
    this.prodService.prodDelete(this.prod).subscribe(data => {
      window.location.reload()
    });
  }
  editProd(prod){}

}
