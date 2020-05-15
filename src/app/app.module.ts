import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Home1Component } from './home/home1/home1.component';

import { DetailsComponent } from './blog/details/details.component';
import { PostFullComponent } from './blog/post-full/post-full.component';
import { LeftSidebarComponent } from './blog/left-sidebar/left-sidebar.component';
import { RightSidebarComponent } from './blog/right-sidebar/right-sidebar.component';
import { TeamMemberComponent } from './pages/team-member/team-member.component';
import { FaqComponent } from './pages/faq/faq.component';
import { RegisterComponent } from './pages/register/register.component';
import { LoginComponent } from './pages/login/login.component';
import { ForgetComponent } from './pages/forget/forget.component';
import { CommingSoonComponent } from './pages/comming-soon/comming-soon.component';
import { Error404Component } from './pages/error404/error404.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from "@angular/router";
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { FeaturesComponent } from './features/features.component';
import { PricingComponent } from './pricing/pricing.component';
import { TestimonialComponent } from './pages/testimonial/testimonial.component';


import { HttpClientModule, HttpClient } from "@angular/common/http";
import { TranslateModule, TranslateLoader } from "@ngx-translate/core";
import { TranslateHttpLoader } from "@ngx-translate/http-loader";

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}


@NgModule({
  declarations: [
    AppComponent,
    Home1Component,
    DetailsComponent,
    PostFullComponent,
    LeftSidebarComponent,
    RightSidebarComponent,
    TeamMemberComponent,
    FaqComponent,
    RegisterComponent,
    LoginComponent,
    ForgetComponent,
    CommingSoonComponent,
    Error404Component,
    NavbarComponent,
    FooterComponent,
    AboutComponent,
    ContactComponent,
    FeaturesComponent,
    PricingComponent,
    TestimonialComponent
    
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: "home", component: Home1Component },
      { path: "login", component: LoginComponent },

      { path: "register", component: RegisterComponent },
      { path: "features", component: FeaturesComponent },
      { path: "about", component: AboutComponent },
      { path: "pricing", component: PricingComponent },
      { path: "details", component: DetailsComponent },
      { path: "full", component: PostFullComponent },
      { path: "l-slider", component: LeftSidebarComponent },
      { path: "r-slider", component: RightSidebarComponent },
      { path: "team", component: TeamMemberComponent },
      { path: "contact", component: ContactComponent },
      { path: "faq", component: FaqComponent },
      { path: "forgetpassword", component: ForgetComponent },
      { path: "comingsoon", component: CommingSoonComponent },
      { path: "testimonial", component: TestimonialComponent },
      { path: "error404", component: Error404Component },




      
      { path: "", redirectTo: "home", pathMatch: "full" },
      { path: "**", redirectTo: "home", pathMatch: "full" },
       
    ]),
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
