import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Params,Router } from '@angular/router';
import { TaskService } from 'src/app/Services/task.service';
import Swal from 'sweetalert2';

@Component({
selector: 'app-add-task',
templateUrl: './add-task.component.html',
styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {

constructor(private taskService: TaskService, private route: ActivatedRoute, private router: Router) { }
listId!: string;

ngOnInit() {
this.route.params.subscribe(
(params: Params) => {
this.listId = params['listId'];
}
)
}

createTask(title: string,note:string,date:any) {
const dateString=date.toDateString();
this.taskService.createTask(title,note,dateString, this.listId).subscribe((newTask: any) => {
Swal.fire('Success','Task has been Added Sucessfully','success');
this.router.navigate(['/user/lists'], { relativeTo: this.route });
},err=>{
Swal.fire('Error','Server Down','error');
});
}

}
