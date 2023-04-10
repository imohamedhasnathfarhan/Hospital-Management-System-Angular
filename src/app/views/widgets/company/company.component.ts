import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { FormBuilder, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.scss']
})
export class CompanyComponent implements OnInit {
  companyName = new FormControl('', [Validators.required, Validators.pattern('[A-Za-z -]+')]);
  visible = [true, true];
  dismissible = true;
  @ViewChild('registerBtn') registerBtn!: ElementRef<HTMLButtonElement>;
  @ViewChild('companyNameInput') companyNameInput!: ElementRef<HTMLInputElement>;
  employee: any;


  companyForm!: FormGroup;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.companyForm = this.formBuilder.group({
      company_name: ['', Validators.required],
      registration_no: ['', Validators.required],
      address_1: ['', Validators.required],
      address_2: [''],
      city: ['', Validators.required],
      zipcode: ['', Validators.required],
      county: ['', Validators.required],
      tel1: new FormControl('', [Validators.required, Validators.pattern('^[0-9]{10}$')]),
      tel2:  new FormControl('', [Validators.required, Validators.pattern('^[0-9]{10}$')]),
      tel3:  new FormControl('', [Validators.required, Validators.pattern('^[0-9]{10}$')]),
      email: ['', [Validators.required, Validators.email]],
      agree_terms: ['', Validators.requiredTrue]
    });


  }

  onAlertVisibleChange(eventValue: any = this.visible) {
    this.visible[1] = eventValue;
  }

  onResetDismiss() {
    this.visible = [true, true];
  }

  onToggleDismiss() {
    this.dismissible = !this.dismissible;
  }

  onSubmit() {
    if (this.companyForm.get('tel1')!.invalid) {
      // submit the form
    } else {
      // show validation errors
    }
  }
  checkTel1Errors() {
    if (this.companyForm!.get('tel1')!.errors) {
      const errors = this.companyForm!.get('tel1')!.errors!;
      if (errors['required']) {
        console.log('tel1 is required');
      }
      if (errors['pattern']) {
        console.log('tel1 does not match pattern');
      }
    }
  }

}

function checkTel1Errors() {
  throw new Error('Function not implemented.');
}
function onSubmit() {
  throw new Error('Function not implemented.');
}

function onToggleDismiss() {
  throw new Error('Function not implemented.');
}

function constructor(formBuilder: any, anyFormBuilder: typeof FormBuilder) {
  throw new Error('Function not implemented.');
}

function ngOnInit() {
  throw new Error('Function not implemented.');
}

function onAlertVisibleChange(eventValue: any, arg1: any) {
  throw new Error('Function not implemented.');
}

function onResetDismiss() {
  throw new Error('Function not implemented.');
}

