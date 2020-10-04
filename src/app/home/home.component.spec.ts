import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { APP_BASE_HREF } from '@angular/common'; 
import { RouterModule, Routes } from '@angular/router'; 
import { RouterTestingModule } from '@angular/router/testing';

import { HomeComponent } from './home.component';
import { AddProdComponent } from '../add-prod/add-prod.component';
import { EditProdComponent } from '../edit-prod/edit-prod.component';
import { AppComponent } from '../app.component'; 


describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
