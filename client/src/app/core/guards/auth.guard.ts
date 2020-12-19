import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot,Router } from '@angular/router';
import { AuthService } from '../../service/auth-service/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private router: Router,
    private accountService: AuthService
) { }

canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const account = this.accountService.accountValue;
    if (account) {
        // check if route is restricted by role
        if (route.data.roles && !route.data.roles.includes(account.role)) {
            // role not authorized so redirect to home page
            this.router.navigate(['/']);
            return false;
        }

        // authorized so return true
        return true;
    }

    // not logged in so redirect to login page with the return url 
    this.router.navigate(['/session/login'], { queryParams: { returnUrl: state.url }});
    return false;
}
}