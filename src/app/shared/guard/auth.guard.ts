import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { AuthService} from "../services/auth.service";
import { Observable } from 'rxjs';

// Skyddar från att icke inloggad kan navigera bort från login sidan.
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    public authService:AuthService,
    public router:Router,
  ) {  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    //IF-statement som sätter routern till att naviger atill "log-in" om man inte är inloggad
    if (this.authService.isLoggedIn !== true){
      this.router.navigate(['sign-in'])
      }
    return true;
  }

}
