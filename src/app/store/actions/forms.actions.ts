import {Action} from '@ngrx/store';

export const LOAD_FORMS = '[forms] Load Forms';
export const CREATE_FORMS = '[forms] Create Forms';
export const CREATE_FORMS_SUCCESS = '[forms] Create Forms success';
export const CREATE_FORMS_FAIL = '[forms] Create Forms fail';
export const DELETE_FORMS = '[forms] Delete Forms';
export const DELETE_FORMS_SUCCESS = '[forms] Delete Forms success';
export const DELETE_FORMS_FAIL = '[forms] Delete Forms fail';
export const LOAD_FORMS_SUCCESS = '[forms] Load Forms Success';
export const LOAD_FORMS_FAIL = '[forms] Load Forms Fail';
export const SET_ACTIVE_FORM = '[forms] Set Active Form';
export const SET_ORGUNIT = '[forms] Set Orgunit';
export const SET_PERIOD = '[forms] Set Period';
export const SET_FORM_READY = '[forms] Set Form Ready';
export const RESET_STATE = '[forms] Reset State';

export class LoadForms implements Action {
  readonly type = LOAD_FORMS;
}

export class LoadFormsSuccess implements Action {
  readonly type = LOAD_FORMS_SUCCESS;
  constructor(public payload: any) {}
}

export class LoadFormsFail implements Action {
  readonly type = LOAD_FORMS_FAIL;
  constructor(public payload: any) {}
}

export class CreateForms implements Action {
  readonly type = CREATE_FORMS;
  constructor(public payload: any) {}
}

export class CreateFormsSuccess implements Action {
  readonly type = CREATE_FORMS_SUCCESS;
  constructor(public payload: any) {}
}

export class CreateFormsFail implements Action {
  readonly type = CREATE_FORMS_FAIL;
  constructor(public payload: any) {}
}

export class DeleteForms implements Action {
  readonly type = DELETE_FORMS;
  constructor(public payload: any) {}
}

export class DeleteFormsSuccess implements Action {
  readonly type = DELETE_FORMS_SUCCESS;
  constructor(public payload: any) {}
}

export class DeleteFormsFail implements Action {
  readonly type = DELETE_FORMS_FAIL;
  constructor(public payload: any) {}
}



export class SetActiveForm implements Action {
  readonly type = SET_ACTIVE_FORM;
  constructor(public payload: string) {}
}

export class SetOrgUnit implements Action {
  readonly type = SET_ORGUNIT;
  constructor(public payload: any) {}
}

export class SetPeriod implements Action {
  readonly type = SET_PERIOD;
  constructor(public payload: any) {}
}

export class SetFormReady implements Action {
  readonly type = SET_FORM_READY;
  constructor(public payload: boolean) {}
}

export class ResetState implements Action {
  readonly type = RESET_STATE;
}


export type FormsActions =
  LoadForms
  | LoadFormsFail
  | LoadFormsSuccess
  | CreateForms
  | CreateFormsSuccess
  | CreateFormsFail
  | DeleteForms
  | DeleteFormsSuccess
  | DeleteFormsFail
  | SetActiveForm
  | SetOrgUnit
  | SetPeriod
  | SetFormReady
  | ResetState;
