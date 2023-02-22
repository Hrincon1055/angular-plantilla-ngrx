import { createAction, props } from '@ngrx/store';
import { User } from '../../interfaces/user.interface';

export const setUser = createAction(
  '[Auth] setUser',
  props<{ usuario: User }>()
);
export const unSetUser = createAction('[Auth] unSetUser');
