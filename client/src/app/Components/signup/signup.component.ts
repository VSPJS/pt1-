import { Component, OnInit } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Services/auth.service';
import Swal from 'sweetalert2';

@Component({
selector: 'app-signup',
templateUrl: './signup.component.html',
styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
user={
fname:'',
phoneNo:'',
email:'',
password:''
}
isSuccessful = false;
isSignUpFailed = false;
errorMessage = '';
constructor(private authService: AuthService, private router: Router) { }

ngOnInit() {
}
formSubmit() {
this.authService.signup(this.user).subscribe((res: HttpResponse<any>) => {
//console.log(res);
this.isSignUpFailed = false;
this.router.navigate(['/login']);
this.isSuccessful = true;
Swal.fire('Success','You have succesfully registered','success');
},
err => {
this.errorMessage = err.error.message;
this.isSignUpFailed = true;
});
}

}
