import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs/internal/Subject';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  data:string;
  child:any;
  eventsSubject: Subject<void> = new Subject<void>();
  constructor() { }

  ngOnInit(): void {
  }
  search(){
    this.data = this.child
  }
  emitEventToChild(event:any) {
    this.eventsSubject.next(event);
    
  }

}
