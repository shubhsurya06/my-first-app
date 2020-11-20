import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, UrlTree } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, tap, take } from 'rxjs/operators';
import { AuthService } from './auth.service';

@Injectable({providedIn: 'root'})
export class AuthGuard implements CanActivate{

    constructor(private authService: AuthService, private router: Router){}

    canActivate(route: ActivatedRouteSnapshot, router: RouterStateSnapshot) : boolean | Promise<boolean | UrlTree> | Observable<boolean | UrlTree>{
        return this.authService.user.pipe(
            take(1), // subscribe only once, and unsubscribe obsevable...prevents re-run logic in guard, when we dont want it to run
            map(user => {
                const isAuth = !!user;
                if(isAuth){
                    return true;
                }

                return this.router.createUrlTree(['/auth']);
            })
            // THIS WAS USED IN PREVIOUS VERSIONS OF ANGULAR, NOW THEY HAVE INTRODUCED CREATE_URL_TREE
            // ,tap(isAuth => {
            //     if(!isAuth){
            //         return this.router.navigate(['/auth']);
            //     }
            // })
        );
    }


}