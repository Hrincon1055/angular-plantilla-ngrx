import { ActionReducerMap } from '@ngrx/store';
import * as ui from './uiStore/ui.reducer';
import * as auth from './authStore/auth.reducer';

export interface AppState {
  ui: ui.State;
  auth: auth.State;
}
export const appReducers: ActionReducerMap<AppState> = {
  ui: ui.uiReducer,
  auth: auth.authReducer,
};
