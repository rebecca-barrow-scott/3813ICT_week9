// import { QuoteTextComponenet } from './components/quote-text/quote-text-component';
import { TestBed, async } from '@angular/core/testing';
import { APP_BASE_HREF } from '@angular/common'; 
import { RouterModule, Routes } from '@angular/router'; 
import { RouterTestingModule } from '@angular/router/testing';

import { HomeComponent } from './home/home.component';
import { AddProdComponent } from './add-prod/add-prod.component';
import { EditProdComponent } from './edit-prod/edit-prod.component';
import { AppComponent } from './app.component'; 



describe('AppComponent', () => {
  const routes: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'addprod', component: AddProdComponent},
    {path: 'editprod/:id', component: EditProdComponent}];
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterModule.forRoot(routes)
      ],
      declarations: [
        AppComponent,
        HomeComponent,
        AddProdComponent,
        EditProdComponent
      ],
      providers: [
        {provide: APP_BASE_HREF, useValue: '/'}
      ]
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
  it('should have a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('A title');
  }));
  
  it('home should have a title', async(() => {
    const fixture = TestBed.createComponent(HomeComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('All products');
  }));
});
