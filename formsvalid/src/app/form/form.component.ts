import { Component } from '@angular/core';
import{ Form } from '../form';


@Component({
  selector: 'app-form',
  templateUrl:'./form.component.html'

})
export class FormComponent {

  model= new Form('','','','');

  submitted = false;

  onSubmit() { this.submitted = true; }

 }