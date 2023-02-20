import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.sass'],
})
export class RegisterComponent implements OnInit {
  public formRegister!: FormGroup;
  constructor(
    private _fb: FormBuilder,
    private _authService: AuthService,
    private _router: Router
  ) {}
  ngOnInit(): void {
    this.formRegister = this._fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }
  public saveUser() {
    this._authService.registerUser(this.formRegister.value).subscribe(
      (response: any) => {
        if (response.ok) {
          console.log('register.component LINE 22 =>', response);
          this._router.navigate(['/']);
        } else {
          console.log('register.component LINE 27 =>', response.status);
        }
      },
      (error) => console.log(error)
    );
  }
}
