import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/main-page/header/header.component';
import { BioComponent } from './components/main-page/bio/bio.component';
import { SkillsComponent } from './components/main-page/skills/skills.component';
import { ProjectsComponent } from './components/main-page/projects/projects.component';
import { ContactComponent } from './components/main-page/contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MainPageComponent,
    FooterComponent,
    HeaderComponent,
    BioComponent,
    SkillsComponent,
    ProjectsComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
