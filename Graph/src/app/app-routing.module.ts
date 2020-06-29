import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GraphicComponent } from './navbar/graphic/graphic.component';
import { HomeComponent } from './navbar/home/home.component';
import { CommentsComponent } from './navbar/graphic/comments/comments.component';


const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'cards', component: GraphicComponent,
    children: [
      {path:':id/comments', component: CommentsComponent},
    ]
  },
  {path: '', redirectTo: 'home', pathMatch: "full"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
