import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { letterOnlyValidator } from '../directives/letterOnlyValidator.directive';

@Component({
    selector: 'app-reactive-example1',
    templateUrl: './reactiveExample1.component.html'
})
export class ReactiveExample1Component implements OnInit {
    person = { firstName: "", lastName: "", middleInitial: "", gender: "" };
    submitted = false;
    exampleForm: FormGroup;

    constructor(private formBuilder: FormBuilder) {
    }

    ngOnInit() {
        this.exampleForm = this.formBuilder.group({
            firstName: [this.person.firstName, [Validators.required, Validators.minLength(2), Validators.maxLength(15)]],
            lastName: [this.person.lastName, [Validators.required, Validators.minLength(2), Validators.maxLength(15), letterOnlyValidator()]],
            middleInitial: [this.person.middleInitial, [Validators.maxLength(1), letterOnlyValidator()]],
            gender: [this.person.gender, [Validators.required]]
        });
    }

    resetForm(form: any) {
        this.submitted = false;
        form.reset();
    }

    submitForm(form: any) {
        if (form.valid) {
            this.submitted = true;
        } else {
            this.validateForm(form);
        }
    }

    validateForm(form: any) {
        Object.keys(form.controls).forEach(field => {
            const control = form.get(field);
            if (control instanceof FormControl) {
                control.markAsTouched({ onlySelf: true });
            } else if (control instanceof FormGroup) {
                this.validateForm(control);
            }
        });
    }

    hasErrors(field: any) {
        return (this.exampleForm.get(field).invalid && this.exampleForm.get(field).touched && this.exampleForm.get(field).errors);
    }

    get firstName() { return this.exampleForm.get('firstName'); }
    get lastName() { return this.exampleForm.get('lastName'); }
    get middleInitial() { return this.exampleForm.get('middleInitial'); }
    get gender() { return this.exampleForm.get('gender'); }
}
