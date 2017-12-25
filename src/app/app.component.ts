import { Component } from '@angular/core';  
import { BindingComponent } from './binding/binding.component';
import { IoComponent } from './io/io.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app-component';
  student={
    name:"vuppala",
    roll:"5J0"
  }
  dataPassed(e){
    alert("data is passed");
    console.log(e);
  }
}
