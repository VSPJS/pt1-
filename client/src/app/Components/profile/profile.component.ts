import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
selector: 'app-profile',
templateUrl: './profile.component.html',
styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
user!:any;
constructor(private auth:AuthService) { }

ngOnInit(): void {
this.user=this.auth.getUser();
}

}
