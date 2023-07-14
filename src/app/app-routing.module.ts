import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutMeComponent } from 'src/app/about-me/about-me.component';
import { ContactComponent } from 'src/app/contact/contact.component';
import { ProjectsComponent } from 'src/app/projects/projects.component';

const routes: Routes = [
  { path: './aboutme',
    title: 'About Me',
    component: AboutMeComponent
  },
  { path: './contact',
    title: 'Contact',
    component: ContactComponent
  },
  { path: './projects',
    title: 'Projects',
    component: ProjectsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
