import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddTaskComponent } from './Components/add-task/add-task.component';
import { CompletedTasksComponent } from './Components/completed-tasks/completed-tasks.component';
import { EditListComponent } from './Components/edit-list/edit-list.component';
import { EditTaskComponent } from './Components/edit-task/edit-task.component';
import { HomeComponent } from './Components/home/home.component';
import { IncompleteTasksComponent } from './Components/incomplete-tasks/incomplete-tasks.component';
import { LoginComponent } from './Components/login/login.component';
import { PagenotfoundComponent } from './Components/pagenotfound/pagenotfound.component';
import { ProfileComponent } from './Components/profile/profile.component';
import { SignupComponent } from './Components/signup/signup.component';
import { TaskViewComponent } from './Components/task-view/task-view.component';
import { TodayTasksComponent } from './Components/today-tasks/today-tasks.component';
import { UserDashboardComponent } from './Components/user/user-dashboard/user-dashboard.component';
import { AuthGuard } from './Services/auth.guard';

const routes: Routes = [
/* Authentication Paths */
{path:'login',component:LoginComponent},
{path:'',redirectTo:'login',pathMatch:'full'},
{path:'signup',component:SignupComponent},
/* User-DashBoard */
{path:'user',component:UserDashboardComponent,canActivate:[AuthGuard],
children:[
{path:'profile',component:ProfileComponent},
{path:'home',component:HomeComponent},
{path:'lists',component:TaskViewComponent},
{path:'lists/:listId',component:TaskViewComponent},
{path:'edit-list/:listId', component: EditListComponent },
{path:'lists/:listId/new-task',component:AddTaskComponent},
{path:'lists/:listId/edit-task/:taskId',component:EditTaskComponent},
{path:'completed-tasks',component:CompletedTasksComponent},
{path:'completed-tasks/:listId',component:CompletedTasksComponent},
{path:'incompleted-tasks',component:IncompleteTasksComponent},
{path:'incompleted-tasks/:listId',component:IncompleteTasksComponent},
{path:'today-tasks',component:TodayTasksComponent},
{path:'today-tasks/:listId',component:TodayTasksComponent},
{path: '**', component: PagenotfoundComponent}
]
},
{path: '**', component: PagenotfoundComponent} // Displays 404 error page if user try's to nav to a page not in the app.
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
