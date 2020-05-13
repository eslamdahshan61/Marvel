import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';

import { filter } from 'rxjs/operators';
import { map } from 'rxjs/operators';


declare var $:any;
function main(){

$('.slider-wrapper-2').slick({
  arrows: false,
  dots: true,
  loop:true,
  infinite: false,
  slidesToShow: 4,
  slidesToScroll: 4,
  responsive: [{
          breakpoint: 600,
          settings: {
              slidesToShow: 2,
              slidesToScroll: 2
          }
      }, 
      {
          breakpoint: 480,
          settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              dots: false,
              autoplay:true,
          }
      }
  ]
});   
}



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Marvel';
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute
) { }

ngOnInit() {
  main()

   /* this.router.events.pipe(
    filter(event => event instanceof NavigationEnd),
    map(() => this.activatedRoute).subscribe((event)=> {
      $.getScript('assets/js/main.js');
    })
  )
  */
 $('.slider-wrapper-2').slick({
  arrows: false,
  dots: true,
  loop:true,
  infinite: false,
  slidesToShow: 4,
  slidesToScroll: 4,
  responsive: [{
          breakpoint: 600,
          settings: {
              slidesToShow: 2,
              slidesToScroll: 2
          }
      }, 
      {
          breakpoint: 480,
          settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              dots: false,
              autoplay:true,
          }
      }
  ]
});  

  
}
}
