import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate{
  constructor(private router: Router) { }

  public canActivate(): boolean {
    if (!localStorage.getItem('token')) {
		this.router.navigate(['']);
      return false;
    }
    return true;
  }
}
