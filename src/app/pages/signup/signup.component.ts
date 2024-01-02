import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { SecurityGuardService } from 'src/app/services/security-guard.service';
import Swal from 'sweetalert2'
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  constructor(private snack:MatSnackBar, private service:SecurityGuardService, private router: Router){}

  public showPassword: boolean = false;

  public togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }

  public securitySignUpData={
    username:'',
    password:'',
    name:'',
    contact:'',
    address:'', 

  }

  public conPass={
    confirmPassword:'',
  }
  

  formSubmit(){
    if (this.securitySignUpData.password !== this.conPass.confirmPassword) {
      return;
    }
    else if(this.securitySignUpData.username=='' || this.securitySignUpData.username==null){
      // alert('username is required');
      this.snack.open("username is required","",{
        duration:3000,
        verticalPosition:'bottom',
        horizontalPosition:'center'
      });
      return;
    }else if(this.securitySignUpData.password=='' || this.securitySignUpData.password==null || this.conPass.confirmPassword=='' || this.conPass.confirmPassword==null){
      // alert('username is required');
      this.snack.open("password is required","",{
        duration:3000,
        verticalPosition:'bottom',
        horizontalPosition:'center'
      });
      return;
    }else if(this.securitySignUpData.address=='' || this.securitySignUpData.address==null){
      // alert('username is required');
      this.snack.open("address is required","",{
        duration:3000,
        verticalPosition:'bottom',
        horizontalPosition:'center'
      });
      return;
    }else if(this.securitySignUpData.name=='' || this.securitySignUpData.name==null){
      // alert('username is required');
      this.snack.open("name is required","",{
        duration:3000,
        verticalPosition:'bottom',
        horizontalPosition:'center'
      });
      return;
    }else if(this.securitySignUpData.contact=='' || this.securitySignUpData.contact==null){
      // alert('username is required');
      this.snack.open("contact is required","",{
        duration:3000,
        verticalPosition:'bottom',
        horizontalPosition:'center'
      });
      return;
    }else{


      this.service.createUser(this.securitySignUpData).subscribe(
        (data)=>{
          //success
          console.log(data);
          
          // this._snackBar.open("user registered successfully","",{
          //   duration:3000,
          //   verticalPosition:'top',
          //   horizontalPosition:'center'
          // });
          Swal.fire('Sucess','user registred','success');

        },
        (error)=>{
            console.log(error);
            this.snack.open("something went wrong","",{
              duration:3000,
              verticalPosition:'top',
              horizontalPosition:'center'
            });

        }
      );


    }
    

  }


}
