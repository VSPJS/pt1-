import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TaskService } from 'src/app/Services/task.service';
import Swal from 'sweetalert2';

@Component({
selector: 'app-newlist',
templateUrl: './newlist.component.html',
styleUrls: ['./newlist.component.css']
})
export class NewlistComponent implements OnInit {
constructor(private taskService: TaskService, private router: Router) { }

ngOnInit() {
}

createList(title: string) {
this.taskService.createList(title).subscribe((list: any) => {
//console.log(list);
// Now we navigate to /lists/task._id
//this.router.navigate([ '/user/lists', list._id ]);
Swal.fire('Success','list has been Added Sucessfully','success');
window.location.reload(); 
},err=>{
Swal.fire('Error','Server Down','error');
});
}

}
