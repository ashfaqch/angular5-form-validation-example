import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TemplateComponent } from './template-forms/template.component';
import { TemplateExample1Component } from './template-forms/templateExample1.component';
import { ReactiveComponent } from './reactive-forms/reactive.component';
import { ReactiveExample1Component } from './reactive-forms/reactiveExample1.component';
import { LetterOnlyValidatorDirective } from './directives/letterOnlyValidator.directive';

const routes: Routes = [
  { path: 'reactive', component: ReactiveComponent },
  { path: 'template', component: TemplateComponent },
  { path: '', redirectTo: 'reactive', pathMatch: 'full' },
  { path: '**', redirectTo: 'reactive', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    TemplateComponent,
    TemplateExample1Component,
    ReactiveComponent,
    ReactiveExample1Component,
    LetterOnlyValidatorDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
}
