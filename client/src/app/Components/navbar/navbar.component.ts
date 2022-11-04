import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
selector: 'app-navbar',
templateUrl: './navbar.component.html',
styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
isLoggedIn=false;
user:any
constructor(public auth:AuthService) { }

ngOnInit(): void {
this.isLoggedIn=this.auth.isLoggedIn();
this.user=this.auth.getUser();
this.auth.authStatusSubject.asObservable().subscribe(data=>{
this.isLoggedIn=this.auth.isLoggedIn();
this.user=this.auth.getUser();
});

}
logout()
{
this.auth.logout()
window.location.reload()
}

}
