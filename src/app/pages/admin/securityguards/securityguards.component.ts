import { Component, OnInit } from '@angular/core';
import { MatDialog  } from '@angular/material/dialog';
import { SignupComponent } from '../../signup/signup.component';
import { LoginService } from 'src/app/services/login.service';
import { MatTableModule } from '@angular/material/table';
import { UpdateGuardDialogComponentComponent } from './update-guard-dialog-component/update-guard-dialog-component.component';
@Component({
  selector: 'app-securityguards',
  templateUrl: './securityguards.component.html',
  styleUrls: ['./securityguards.component.css']
})
export class SecurityguardsComponent implements OnInit {
  constructor(public dialog:MatDialog, public loginservice:LoginService){}
  public guards: any[] = [];
  displayedColumns: string[] = ['name', 'username','address','contact','actions'];
  ngOnInit(): void {
    this.loadGuardUsers();
  }

  openUpdateDialog(guard: any): void {
    const dialogRef = this.dialog.open(UpdateGuardDialogComponentComponent, {
      width: '400px',
      height:'auto',
      data: guard, // Pass the guard details to the dialog
    });
  }

  
deleteGuard(guard: any): void {
  // Implement the logic to delete the guard using an API call
  console.log('Deleting guard:', guard);
}
    
  loadGuardUsers(): void {
    this.loginservice.getAllguards().subscribe(
      (data) => {
        this.guards = data;
        console.log(this.guards);
      },
      (error) => {
        console.error('Error loading guard users', error);
      }
    );
  }

  opendialog(){
    this.dialog.open(SignupComponent,
      {
        width: '400px', // specify the width
        height: 'auto', // you can also use 'auto' or specify a fixed height
        // other configuration options
      });
  }

}
