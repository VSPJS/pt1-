import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Task } from 'src/app/models/task.model';
import { List } from 'src/app/models/list.model';
import { TaskService } from 'src/app/Services/task.service';
import { AuthService } from 'src/app/Services/auth.service';
import { MatDialog } from '@angular/material/dialog';
import { NewlistComponent } from '../newlist/newlist.component';

@Component({
selector: 'app-today-tasks',
templateUrl: './today-tasks.component.html',
styleUrls: ['./today-tasks.component.css']
})
export class TodayTasksComponent implements OnInit {

lists!: List[];
tasks!: Task[];

selectedListId!: string;

constructor(private taskService: TaskService,private auth:AuthService, private route: ActivatedRoute, private router: Router,public dialog: MatDialog) { }

ngOnInit() {
this.route.params.subscribe(
(params: Params) => {
if (params['listId']) {
this.selectedListId = params['listId'];
let id=params['listId'];
const todayDate = new Date(); // Get current date
this.taskService.getTodayTasks(id,todayDate.toDateString()).subscribe((tasks: any) => {
this.tasks = tasks;
})

}else {
//this.tasks = undefined;
this.tasks
}
});
this.taskService.getLists().subscribe((lists: any) => {
this.lists = lists;
})
/*const todayDate = new Date(); // Get current date
this.taskService.getTodayTasks(this.selectedListId,todayDate.toDateString()).subscribe(data => {
this.tasks = data; // API JSON data received from the server passed into tasks array
});*/

}


onTaskClick(task: Task) {
// we want to set the task to completed
this.taskService.complete(task).subscribe(() => {
// the task has been set to completed successfully
console.log("Completed successully!");
task.completed = !task.completed;
this.ngOnInit();
})
}

onDeleteListClick() {
this.taskService.deleteList(this.selectedListId).subscribe((res: any) => {
this.router.navigate(['/user/lists']);
//window.location.reload();
console.log(res);
})
}

onDeleteTaskClick(id: string) {
this.taskService.deleteTask(this.selectedListId, id).subscribe((res: any) => {
this.tasks = this.tasks.filter(val => val._id !== id);
this.router.navigate(['/user/lists',this.selectedListId]);
console.log(res);
})
}

openDialog() {
const dialogRef = this.dialog.open(NewlistComponent); // Display CreateComponent inside dialog box.
dialogRef.afterClosed().subscribe(result => { // Close and log the results
console.log(`Dialog result: ${result}`);
});
}// End function
closeDialog() {
this.dialog.closeAll();
}// End closeDialog function for add task 

}
