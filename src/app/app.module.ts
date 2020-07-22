import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule }   from '@angular/forms';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FrameworkComponent } from './framework/framework.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { TemplateFormComponent } from './template-form/template-form.component';

@NgModule({
  declarations: [
    AppComponent,
    FrameworkComponent,
    HomeComponent,
    AboutComponent,
    TemplateFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule.forRoot(),
    RouterModule.forRoot([
      {path: 'Home', component: HomeComponent},
      {path: 'About',component: AboutComponent},
      {path: 'Template-driven', component: TemplateFormComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
