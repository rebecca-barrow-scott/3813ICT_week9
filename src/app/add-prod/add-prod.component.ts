import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProdService } from '../prod.service';
import { ProdModel } from '../ProdModel';

@Component({
  selector: 'app-add-prod',
  templateUrl: './add-prod.component.html',
  styleUrls: ['./add-prod.component.scss']
})
export class AddProdComponent implements OnInit {
  id:number
  name:string
  desc:string
  price:number
  units:number
  prod = new ProdModel
  feedback:string
  constructor(private prodService: ProdService, private router: Router) { }

  ngOnInit(): void {
  }
  addProd(){
    this.prod.id = this.id
    this.prod.name = this.name
    this.prod.description = this.desc
    this.prod.price = this.price.toFixed(2);
    if (this.units == undefined){
      this.prod.units = 1
    }else {
      this.prod.units = this.units
    }
    
    this.prodService.validate(this.prod).subscribe((data)=>{
      if (data.feedback == null){
        this.prod.id = data.newId
        this.prodService.addProd(this.prod).subscribe((data)=>{
          if (data.feedback == null){
            this.router.navigateByUrl('home')
          } else {
            this.feedback = data.feedback
          }
        })
      } else {
        this.feedback = data.feedback
      }
    })
  }

}
