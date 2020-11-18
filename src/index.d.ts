
export type Conditional<T> = (input: T) => boolean;
export type Scope<T, U> = (input: T) => U;
export type Case<T, U> = [Conditional<T>, Scope<T, U>]; 

export type ErrorCallback = (error: Error) => void; 
export type Catcher<U> = (onError: ErrorCallback) => U | undefined;

export interface FSwitch<T = any, U = any> {
  (input: T, ...cases: Case<T, U>[]): U;
  try: (input: T, ...cases: Case<T, U>[]) => { catch: Catcher<U> }; 
}
