import { Component } from '@angular/core';

@Component({
    selector: 'app-template-example1',
    templateUrl: './templateExample1.component.html'
})
export class TemplateExample1Component {
    person = { firstName: "", lastName: "", middleInitial: "", gender: "" };
    submitted = false;

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
            const control = form.controls[field];
            control.markAsTouched({ onlySelf: true });
        });
    }

    hasErrors(field: any) {
        return (field.invalid && field.touched && field.errors);
    }
}
