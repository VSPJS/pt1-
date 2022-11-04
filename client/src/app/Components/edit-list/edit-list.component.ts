import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { TaskService } from 'src/app/Services/task.service';
import Swal from 'sweetalert2';

@Component({
selector: 'app-edit-list',
templateUrl: './edit-list.component.html',
styleUrls: ['./edit-list.component.css']
})
export class EditListComponent implements OnInit {

constructor(private route: ActivatedRoute, private taskService: TaskService, private router: Router) { }

listId!: string;


ngOnInit() {
this.route.params.subscribe(
(params: Params) => {
this.listId = params['listId'];
console.log(params['listId']);
}
)
}

updateList(title: string) {
this.taskService.updateList(this.listId, title).subscribe(() => {
Swal.fire('Success','List has been Updated Sucessfully','success');
this.router.navigate(['/user/lists', this.listId]);
//window.location.reload();
},err=>{
Swal.fire('Error','Server Down','error');
});
}

}
