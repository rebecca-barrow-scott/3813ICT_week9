import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs'; // Add import
import { ProdService } from './prod.service';
import { ProdModel } from './ProdModel';

describe('ProdService', () => {
  let prodService: ProdService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProdService]
    });
    
    prodService = TestBed.get(ProdService)
  });

  it('should be created', () => {
    expect(prodService).toBeTruthy();
  });
  

  describe('find all products', ()=>{
    it('should return a collection of users', ()=>{
      var product_array: ProdModel[] = [{mdb_id: null, id: 1, name: "product 1", description: "product 1 desc", price: '1.99', units: 10},
                                        {mdb_id: null, id: 2, name: "product 2", description: "product 2 desc", price:'2.99', units: 15},
                                        {mdb_id: null, id: 3, name: "product 3", description: "product 3 desc", price: '3.99', units: 20}]
      let response;
      spyOn(prodService, 'productFind').and.returnValue(of(product_array));
      prodService.productFind().subscribe(res =>{
        response = res
      });
      expect(response).toEqual(product_array);
    });
  });
});
