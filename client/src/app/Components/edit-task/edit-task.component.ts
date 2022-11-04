import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Params,Router } from '@angular/router';
import { TaskService } from 'src/app/Services/task.service';
import Swal from 'sweetalert2';

@Component({
selector: 'app-edit-task',
templateUrl: './edit-task.component.html',
styleUrls: ['./edit-task.component.css']
})
export class EditTaskComponent implements OnInit {

constructor(private route: ActivatedRoute, private taskService: TaskService, private router: Router) { }

taskId!: string;
listId!: string;


ngOnInit() {
this.route.params.subscribe(
(params: Params) => {
this.taskId = params['taskId'];
this.listId = params['listId'];
}
)
}

updateTask(title: string,note:string,date:any) {
const dateString=date.toDateString
this.taskService.updateTask(this.listId, this.taskId, title,note,dateString).subscribe(() => {
Swal.fire('Success','Task has been Updated Sucessfully','success');
this.router.navigate(['/user/lists', this.listId]);
},err=>{
Swal.fire('Error','Server Down','error');
});
}
}
