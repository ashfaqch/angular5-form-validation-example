import { Directive, Input, OnChanges, SimpleChanges } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, Validator, ValidatorFn, Validators } from '@angular/forms';

export function letterOnlyValidator(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } => {
        const value = control.value;
        if (value === '') {
            return null;
        }
        const expression = { pattern: "^[a-zA-Z]+$", message: "Letters only and no spaces." };
        const regexp = new RegExp(expression.pattern);
        return !regexp.test(value) ? { 'letterOnly': expression.message } : null;
    };
}

@Directive({
    selector: '[dir-letter-only]',
    providers: [{ provide: NG_VALIDATORS, useExisting: LetterOnlyValidatorDirective, multi: true }]
})
export class LetterOnlyValidatorDirective implements Validator {
    validate(control: AbstractControl): { [key: string]: any } {
        return letterOnlyValidator()(control);
    }
}