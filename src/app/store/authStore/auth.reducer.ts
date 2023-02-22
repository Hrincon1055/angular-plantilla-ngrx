import { createReducer, on, Action } from '@ngrx/store';
import { setUser, unSetUser } from './auth.actions';
import { User } from '../../interfaces/user.interface';

export interface State {
  user: User | null;
}

export const initialState: State = {
  user: null,
};

const _authReducer = createReducer<State, Action>(
  initialState,
  on(setUser, (state, { usuario }) => ({ ...state, user: { ...usuario } })),
  on(unSetUser, (state) => ({ ...state, user: null }))
);

export function authReducer(state: State = initialState, action: Action) {
  return _authReducer(state, action);
}
