import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass'],
})
export class HeaderComponent {
  constructor(private _router: Router, private _authService: AuthService) {}
  public logoutUser() {
    this._authService.logoutUser();
    this._router.navigate(['/login']);
  }
}
