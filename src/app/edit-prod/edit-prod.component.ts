import { Component, OnInit } from '@angular/core';
import { ProdModel } from '../ProdModel';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { ProdService } from '../prod.service';

@Component({
  selector: 'app-edit-prod',
  templateUrl: './edit-prod.component.html',
  styleUrls: ['./edit-prod.component.scss']
})
export class EditProdComponent implements OnInit {
  id:number
  name:string
  desc:string
  price:number
  units:number
  prod = new ProdModel
  feedback:string
  mdb_id:number
  constructor(private route: ActivatedRoute, private prodService:ProdService, private router:Router) { }

  ngOnInit(): void {
    this.mdb_id = this.route.snapshot.params.id;
    this.prod.mdb_id = this.mdb_id
    this.prodService.getOne(this.prod).subscribe((data)=>{
      this.id = data.prod.id
      this.name = data.prod.name +" change"
      this.desc = data.prod.description +" change"
      this.price = data.prod.price
      this.units = data.prod.units
    })
  }

  editProd(){
    this.prod.mdb_id = this.mdb_id
    this.prod.id = this.id
    this.prod.name = this.name
    this.prod.description = this.desc
    this.prod.price = this.price.toFixed(2);
    this.prod.units = this.units
    this.prodService.validate(this.prod).subscribe((data)=>{
      if (data.feedback == null){
        this.prodService.editProd(this.prod).subscribe((data)=>{
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
