import { HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Services/auth.service';
import Swal from 'sweetalert2';

@Component({
selector: 'app-login',
templateUrl: './login.component.html',
styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
loginData={
email:'',
password:''
}
constructor(private authService: AuthService, private router: Router) { }

ngOnInit() {
}

formSubmit() {
if(this.loginData.email.trim()==''||this.loginData==null)
{
Swal.fire({
icon: 'error',
title: 'Oops...',
text: 'Email is Required!',
})
}
if(this.loginData.password.trim()==''||this.loginData==null)
{
Swal.fire({
icon: 'error',
title: 'Oops...',
text: 'Password is Required!',
})
}
this.authService.login(this.loginData).subscribe((res: HttpResponse<any>) => {
if (res.status === 200) {
// we have logged in successfully
this.router.navigate(['/user/home']);
this.authService.authStatusSubject.next(true)
}
else
{
this.authService.logout();
}
console.log(res);

},err=>{
//error
Swal.fire({
icon: 'error',
title: 'Oops...',
text: 'email or password is incorrect,please check!!',
});
});
}

}
