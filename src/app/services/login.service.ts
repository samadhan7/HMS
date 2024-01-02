import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }

  public getCurrentUser(){
    return this.http.get<any>(`${baseUrl}/auth/current-user`);
  }

  generateToken(loginData: any): Observable<any> {
    // Implement your logic to add a user

    //generate token
    return this.http.post(`${baseUrl}/auth/generate-token`, loginData);
  }

  public getAllguards(): Observable<any>{
    return this.http.get<any>(`${baseUrl}/api/guards`);
  }

  //set login token in local storage
  public loginUser(token:any){
    localStorage.setItem('token',token);
    return true;
  } 

  //user is login or not 
  public isLoggedIn(){
    let tokenstr=localStorage.getItem("token");
    if(tokenstr==undefined || tokenstr=='' || tokenstr==null){
      return false;
    }else{
      return true;
    }
  }

  //user logout remove token from localstorage
  public logout(){
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    return true;
  }

  //get token
  public getToken(){
    return localStorage.getItem("token");
  }

  //set userdetails
  public setUser(user:any){
    localStorage.setItem('user',JSON.stringify(user));
  }

  //get user
  public getUser(){
    let userStr=localStorage.getItem('user');
    if(userStr != null){
      return JSON.parse(userStr);
    }else{
      this.logout();
      return null;
    }
  }

  //get User role
  public getUserRole(){
    let user=this.getUser();
    return user.authorities[0].authority;
  }
}
