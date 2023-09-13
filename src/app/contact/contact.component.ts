import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  name: string = '';
  email: string = '';
  message: string = '';

  // sendEmail(): void {
  //   window.location.href = `mailto:jaswanthsai3459@gmail.com?subject=Message from ${this.name}&body=${this.message}`;
  // }
  // form: FormGroup;
  // loading = false;

  // constructor(private fb: FormBuilder) {
  //   this.form = this.fb.group({
  //     name: '',
  //     email: '',
  //     message: ''
  //   });
  // }

  // handleChange(event: any, field: string) {
  //   this.form.patchValue({ [field]: event.target.value });
  // }

  // handleSubmit() {
  // }
}
