import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Router } from '@angular/router';


var style = document.createElement("style");
style.innerHTML = `
@import url('https://fonts.googleapis.com/css2?family=Cairo:wght@200;300;400;600;700;900&display=swap');




h1,
h2,
h3,
h4,
h5,
h6,body,
.smalltext ,
section.coming-soon h2 
 {
  font-family: 'Cairo', sans-serif;
}



.dropdown:hover>.dropdown-nav {  text-align: right; }





@media (min-width: 768px){
.navbar-nav {
  float: left !important;
    margin-right: -15px;
}

.navbar-nav>li {
  float: right;
}
#enImg{
  margin-left: -38px;
}

}

.section.advance-feature-area,
.fadeInUp,
.fadeInLeft,
.work-right,
.work-left {
  
  text-align: center;
}

.advance-feature about-right , .single-advance {  text-align: center;
}

.beefup__head , p.dsp-tc , .blog-tag-cloud {
  text-align: center;}

  .blog-categories-right { text-align: end;}


@media (max-width: 767px) and (min-width: 320px){

.mean-container .mean-nav ul li a {
  text-align: right;


}




}

@media (max-width: 767px) and (min-width: 320px){
.mean-container .mean-nav ul li a.mean-expand {

  left: 0;


}


}




.container>.navbar-header {
    margin-right: 0;
    margin-left: 0;
    float: right;
}
.single-work img {
    position: absolute;
    top: 50px;
    right: -50px;
}

.meanmenu-reveal{
  left: 0px !important;
    right: auto !important;
}




`

function changeLanguageAr() {
  document.head.appendChild(style);
document.getElementById("english").style.display="unset";
document.getElementById("arabic").style.display="none";

}

  
function changeLanguageEn() {
   document.head.removeChild(style); 
  document.getElementById("arabic").style.display="unset";
document.getElementById("english").style.display="none";
}



  @Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.css']
  })
  
export class NavbarComponent implements OnInit {


  constructor(private translate: TranslateService , private router :Router) {
    translate.setDefaultLang("en");
  }

  switchLanguage(language: string) {
    this.translate.use(language);
  }


   startFromTop(){
    window.scrollTo({
      top: 0,
      
      behavior: 'smooth'})
  }

  ngOnInit(): void {
    /* changeLanguageAr() */
  }
  
  addAr() {
    changeLanguageAr();
    
  }

  addEn() {
    changeLanguageEn();
  }

  nav1(){
    this.router.navigate['/home'];
  }



}
