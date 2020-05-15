import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';









@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private translate: TranslateService) {
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

ngAfterContentChecked(){
  this.startFromTop();
}
ngOnInit() {
  
  
   
}
}
