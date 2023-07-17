import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutMeComponent } from 'src/app/about-me/about-me.component';
import { ProjectsComponent } from 'src/app/projects/projects.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '',
  title: 'Home',
  component:HomeComponent,
  pathMatch:'full'
  },
  { path: 'about-me',
    title: 'About Me',
    component: AboutMeComponent
  },
  { path: 'projects',
    title: 'Projects',
    component: ProjectsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
