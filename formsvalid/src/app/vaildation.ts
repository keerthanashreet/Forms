import { Directive } from '@angular/core';
import { AbstractControl, FormGroup, NG_VALIDATORS, ValidationErrors, Validator, ValidatorFn } from '@angular/forms';

export const identityRevealedValidator: ValidatorFn = (control: FormGroup): ValidationErrors | null => {
    const oldPassword = control.get('oldPassword');
    const newPassword = control.get('newPassword');
  
    return oldPassword && newPassword && oldPassword.value === newPassword.value ? { 'identityRevealed': true } : null;
  };

@Directive({
    selector: '[app-validator]',
    providers: [{ provide: NG_VALIDATORS, useExisting: validationDirective, multi: true }]
  })
  export class validationDirective implements Validator {
    validate(control: AbstractControl): ValidationErrors {
      return identityRevealedValidator(control)
    }
  }