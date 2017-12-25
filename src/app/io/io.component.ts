import { Component, OnInit ,Input ,Output ,EventEmitter} from '@angular/core';
import { DataService } from '../data.service';
declare var firebase:any;
@Component({
  selector: 'app-io',
  templateUrl: './io.component.html',
  styleUrls: ['./io.component.css'],
  providers : [DataService]
})
export class IoComponent implements OnInit {

  constructor( private dataService:DataService ) {
   }
  sr=[]
  @Input() students;
  @Output() onPass = new EventEmitter();
  ngOnInit() {
   /* this.dataService.fetchData().subscribe(
    (res)=>this.sr=res
  )*/
  firebase.database().ref('/').on('child_added',(snapshot)=>
      this.sr.push(snapshot.val())
    )
  }
  
  displayData(e){
    this.onPass.emit(e);
  }
   addData(name,roll){
     firebase.database().ref('/').push({name:name,roll:roll})
   }
}
