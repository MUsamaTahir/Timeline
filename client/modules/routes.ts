import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { TimelineComponent } from './timeline/timeline.component';
import { AuthGuard } from './helpers/auth.helper';
import { EditTimelineComponent } from './editTimeline/editTimeline.component';

const routes: Routes = [
  {
    path: '',
    component : HomeComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'timeline',
    component: TimelineComponent, 
    canActivate: [AuthGuard]
  },
  {
    path: 'edit/:id',
    component: EditTimelineComponent, 
    canActivate: [AuthGuard]
  },
  {
    path: '**',
    component: HomeComponent, 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
