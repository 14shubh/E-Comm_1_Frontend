import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor() { }
  name:string = "";
  email:string = "";
  mobile:any;
  gender:any;
  password:string = "";


  public SignUp(){
    
  }

  ngOnInit(): void {

  }

}
