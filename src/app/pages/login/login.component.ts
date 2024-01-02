import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private snack:MatSnackBar, private login:LoginService, private router: Router){}

  loginData={
    username:'',
    password:''
  };

  public showPassword: boolean = false;

  public togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }


  
  formSubmit(){

    // console.log("login button clicked");

    if(this.loginData.username.trim() =='' || this.loginData.username==null){
      this.snack.open('username is required','',{duration:3000,});
      return;
    }else if(this.loginData.password.trim() =='' || this.loginData.password==null){
      this.snack.open('password is required','',{duration:3000,});
      return;
    }else{

      this.login.generateToken(this.loginData).subscribe(
        (data:any)=>{ 
          console.log("sucess");
          console.log(data);
  
  
          //login..
          this.login.loginUser(data.token);
          
  
          this.login.getCurrentUser().subscribe(
            (user:any)=>{
              this.login.setUser(user);
              console.log(user);
  
              
                if(this.login.getUserRole()=='ADMIN'){
                  // redirect for ADMIN
                  this.router.navigate(['/admin']);
  
                }else if(this.login.getUserRole()=='GUARD'){
                    // redirect for NORMAL
                    
                    this.router.navigate(['/security-dashboard']);
                }
              
              
            }
  
  
          )
        },
        (error)=>{
          console.log("Error");
          console.log(error);
          this.snack.open('Invalid details !! try again','',{duration:500,});
        }
        );
      


    }



  }

}
