import { CanActivateFn, Router } from '@angular/router';
import { LoginService } from './login.service';
import { inject } from '@angular/core';

export const securityGuard: CanActivateFn = (route, state) => {
  const loginService = inject(LoginService);
  
  const router = inject(Router);

  if (loginService.isLoggedIn() && loginService.getUserRole()=='GUARD') {
    return true;
  } else {
    router.navigate(['/']);
    
    return false;
  }
};
