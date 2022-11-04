import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { UserDashboardComponent } from './Components/user/user-dashboard/user-dashboard.component';
import { LoginComponent } from './Components/login/login.component';
import { SignupComponent } from './Components/signup/signup.component';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { WebReqInterceptor } from './Services/web-req.interceptor';
import { SidebarComponent } from './Components/sidebar/sidebar.component';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { ProfileComponent } from './Components/profile/profile.component';
import { HomeComponent } from './Components/home/home.component';
import {MatTreeModule} from '@angular/material/tree';
import { TaskViewComponent } from './Components/task-view/task-view.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatMenuModule} from '@angular/material/menu';
import {MatDialogModule} from '@angular/material/dialog';
import { NewlistComponent } from './Components/newlist/newlist.component';
import { EditListComponent } from './Components/edit-list/edit-list.component';
import {MatPaginatorModule} from '@angular/material/paginator';
import { AddTaskComponent } from './Components/add-task/add-task.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { EditTaskComponent } from './Components/edit-task/edit-task.component';
import { CompletedTasksComponent } from './Components/completed-tasks/completed-tasks.component';
import { IncompleteTasksComponent } from './Components/incomplete-tasks/incomplete-tasks.component';
import { TodayTasksComponent } from './Components/today-tasks/today-tasks.component';
import {MatNativeDateModule} from '@angular/material/core';
import { PagenotfoundComponent } from './Components/pagenotfound/pagenotfound.component';

@NgModule({
declarations: [
AppComponent,
NavbarComponent,
UserDashboardComponent,
LoginComponent,
SignupComponent,
SidebarComponent,
ProfileComponent,
HomeComponent,
TaskViewComponent,
NewlistComponent,
EditListComponent,
AddTaskComponent,
EditTaskComponent,
CompletedTasksComponent,
IncompleteTasksComponent,
TodayTasksComponent,
PagenotfoundComponent
],
imports: [
BrowserModule,
AppRoutingModule,
HttpClientModule,
FormsModule,
BrowserAnimationsModule,
MatToolbarModule,
MatButtonModule,
MatCardModule,
MatFormFieldModule,
MatInputModule,
MatListModule,
MatIconModule,
MatTreeModule,
MatSidenavModule,
MatMenuModule,
MatDialogModule,
MatPaginatorModule,
MatDatepickerModule,
MatNativeDateModule,
],
providers: [ { provide: HTTP_INTERCEPTORS, useClass: WebReqInterceptor, multi: true }],
bootstrap: [AppComponent]
})
export class AppModule { }
