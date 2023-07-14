import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutMeComponent } from 'src/app/about-me/about-me.component';
import { ProjectsComponent } from 'src/app/projects/projects.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  { path: 'about-me',
    title: 'About Me',
    component: AboutMeComponent
  },
  { path: 'projects',
    title: 'Projects',
    component: ProjectsComponent
  },
  { path: '',
    title: 'Home',
    component:AppComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
