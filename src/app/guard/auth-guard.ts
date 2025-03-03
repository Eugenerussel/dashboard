import { Injectable, Inject, inject } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { loadRemoteModule } from '@angular-architects/module-federation';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  private router = inject(Router);
  private authService!: any;

  constructor(@Inject('AuthService') private injectedAuthService: any) {
    this.loadAuthService();
  }

  async loadAuthService() {
    try {
      const module = await loadRemoteModule({
        remoteEntry: 'http://localhost:8080/remoteEntry.js',
        remoteName: 'host-app',
        exposedModule: './AuthService'
      });
      this.authService = new module.AuthService();
      console.log("AuthService loaded:", this.authService);
    } catch (error) {
      console.error("Error loading AuthService:", error);
    }
  }

  async canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean> {
    if (!this.authService) {
      console.log("AuthService is not yet loaded, denying access.");
      this.router.navigate(['/home']);
      return false;
    }

    try {
        const isAuthenticated = await this.authService.isAuthenticated();
        if (!isAuthenticated) {
          this.router.navigate(['/home']);
          return false;
        }
        return true;
      } catch (err) {
        console.error("Authentication check failed:", err);
        this.router.navigate(['/home']);
        return false;
      }
  }
}
