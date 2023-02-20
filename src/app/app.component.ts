import { Component, OnInit } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
})
export class AppComponent implements OnInit {
  constructor(private _authService: AuthService) {}
  ngOnInit(): void {
    // console.log('app.component LINE 12 =>');
    // let user = JSON.parse(localStorage.getItem('user') || '{}');
    // if (user.hasOwnProperty('token')) {
    //   this._authService.renewTokenUser(user.token).subscribe(
    //     (response) => {},
    //     (error) => console.log(error)
    //   );
    // }
  }
}
