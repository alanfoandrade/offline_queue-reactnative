/**
 * Action types
 */
export enum AuthActionsTypes {
  SIGN_IN_REQUEST = '@auth/SIGN_IN_REQUEST',
  SIGN_UP_REQUEST = '@auth/SIGN_UP_REQUEST',
}

/**
 * Data types
 */
export interface ISignInData {
  email: string;
  password: string;
}

/**
 * State type
 */
export interface IAuthState {
  readonly token: string | null;
  readonly signed: boolean;
  readonly loading: boolean;
}
