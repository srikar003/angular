import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'; 
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { BindingComponent } from './binding/binding.component';
import { IoComponent } from './io/io.component';
import { FilterPipe } from './io/filter.pipe';
import { HttpModule } from '@angular/http';
import 'rxjs/add/operator/map';
const routes: Routes = [
  { path: '', redirectTo:'/app' ,pathMatch:"full" },
  { path: 'app' , component: AppComponent },
  { path: 'binding' , component: BindingComponent },
  { path: 'io',component:IoComponent}

]

@NgModule({
  declarations: [
    AppComponent,
    BindingComponent,
    IoComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
