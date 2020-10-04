import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs'; 
import { ProdService } from '../prod.service';

import { AddProdComponent } from './add-prod.component';

describe('AddProdComponent', () => {
  let component: AddProdComponent;
  let fixture: ComponentFixture<AddProdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddProdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddProdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
