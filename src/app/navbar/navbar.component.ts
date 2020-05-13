import { Component, OnInit } from '@angular/core';

var script = document.createElement("script");
script.innerHTML = `console.log("hi")`



function changeLanguageAr() {
  document.body.appendChild(script);}


  @Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.css']
  })
  
export class NavbarComponent implements OnInit {

  constructor() { }
   startFromTop(){
    window.scrollTo({
      top: 0,
      
      behavior: 'smooth'})
  }

  ngOnInit(): void {
    /* changeLanguageAr() */
  }

}
