import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { HomeComponent } from './componentes/home/home.component';
import { NuevoBlogComponent } from './componentes/nuevo-blog/nuevo-blog.component';
import { AdminComponent } from './componentes/admin/admin.component';
import { AboutComponent } from './componentes/about/about.component';
import { NotFoungComponent } from './componentes/not-foung/not-foung.component';
import { NotFoundComponent } from './componentes/not-found/not-found.component';
import { DetailsComponent } from './componentes/details/details.component';
import { EditComponent } from './componentes/edit/edit.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    NuevoBlogComponent,
    AdminComponent,
    AboutComponent,
    NotFoungComponent,
    NotFoundComponent,
    DetailsComponent,
    EditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
