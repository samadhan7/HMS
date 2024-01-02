import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-update-guard-dialog-component',
  templateUrl: './update-guard-dialog-component.component.html',
  styleUrls: ['./update-guard-dialog-component.component.css']
})
export class UpdateGuardDialogComponentComponent {
  public updateSecurityGuardForm: FormGroup;
  constructor(
    public dialogRef: MatDialogRef<UpdateGuardDialogComponentComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private formBuilder: FormBuilder
  ) {
    this.updateSecurityGuardForm = this.formBuilder.group({
      name: [data?.guard?.name || '', Validators.required],
      address: [data?.guard?.address || '', Validators.required],
      contact: [data?.guard?.contact || '', Validators.required],
      username: [data?.guard?.username || '', Validators.required],
      password: ['', Validators.required], // Add password field if needed
      confirmPassword: ['', Validators.required],
    
    
    });
  }
  public updateSecurityGuard={
    username:'',
    password:'',
    name:'',
    contact:'',
    address:'', 

  }

  public showPassword: boolean = false;

  public togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }


  public conPass={
    confirmPassword:'',
  }

  formSubmit(){

  }
}
