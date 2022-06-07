import { Component, OnInit,Input } from '@angular/core';
import { Subscription } from 'rxjs';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  eventsSubscription: Subscription;

@Input() events: Observable<void>;
 searchData:any;
 counter=0;
 checkStatus :boolean;
 anagramData = ["Race","Part","Heart","Listen"]
  constructor() { }

  ngOnInit(): void {
    this.eventsSubscription = this.events.subscribe((user) =>{
      console.log(user);
     this.searchData = user;
     for(let anagram of this.anagramData){
      // console.log(anagram)
       this.anagramCheck(anagram, this.searchData)
       
      //  alert(result);
    }
    if(this.checkStatus){
      alert("Response True")

    }else{
      alert("Response false")
    }
    
      this.checkStatus=false;
    
    });

    
     
  }
  anagramCheck(a:string,b:any){
    a = a.toLowerCase().split("").sort().join("");
    b = b?.toLowerCase().split("").sort().join("");
    console.log(a,b)
    if(a === b){
      
      
        this.checkStatus= true;
    }
      this.counter++;
    
      
  }
}
