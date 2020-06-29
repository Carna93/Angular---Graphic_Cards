import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './navbar/home/home.component';
import { GraphicComponent } from './navbar/graphic/graphic.component';
import { GraphListComponent } from './navbar/graphic/graph-list/graph-list.component';
import { PaginationComponent } from './navbar/graphic/pagination/pagination.component';
import { PageSizeComponent } from './navbar/graphic/page-size/page-size.component';
import { CommentsComponent } from './navbar/graphic/comments/comments.component';
import { ComentListComponent } from './navbar/graphic/comments/coment-list/coment-list.component';
import { ComentFormComponent } from './navbar/graphic/comments/coment-form/coment-form.component';
import { ShowMoreComponent } from './navbar/graphic/show-more/show-more.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from "@angular/forms";



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    GraphicComponent,
    GraphListComponent,
    PaginationComponent,
    PageSizeComponent,
    CommentsComponent,
    ComentListComponent,
    ComentFormComponent,
    ShowMoreComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
