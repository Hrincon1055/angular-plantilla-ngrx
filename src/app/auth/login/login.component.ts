import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
// MIS IMPORTACIONES
import { AppState } from '../../app.reducer';
import { AuthService } from '../../services/auth.service';
import * as actionsUi from '../../store/uiStore/ui.actions';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass'],
})
export class LoginComponent implements OnInit, OnDestroy {
  public formLogin!: FormGroup;
  public isLoading: boolean = false;
  private storeUi$!: Subscription;
  constructor(
    private _fb: FormBuilder,
    private _authService: AuthService,
    private _router: Router,
    private _store: Store<AppState>
  ) {}
  ngOnInit(): void {
    this.formLogin = this._fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
    this.storeUi$ = this._store.select('ui').subscribe((ui) => {
      this.isLoading = ui.isLoading;
    });
  }
  ngOnDestroy(): void {
    this.storeUi$.unsubscribe();
  }
  public loginUser(): void {
    this._store.dispatch(actionsUi.isLoading());
    this._authService.loginUser(this.formLogin.value).subscribe(
      (response: any) => {
        if (response.ok) {
          localStorage.setItem('user', JSON.stringify(response));
          this._store.dispatch(actionsUi.stopLoading());
          this._router.navigate(['/']);
        } else {
          console.log('login.component LINE 31 =>', response);
        }
      },
      (error) => console.log(error)
    );
  }
}
