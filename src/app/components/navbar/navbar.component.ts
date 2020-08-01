import { Component } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  public login: boolean;

  /**
   * Constructor
   *
   * Verify router and redirect to login
   *
   * @param loginService LoginService
   * @param router Router
   */
  constructor(
      private loginService: LoginService,
      private router: Router
  ) {
    router.events.subscribe((event: any) => {
      if (event instanceof NavigationStart) {
        if (event.url.replace('/', '') !== 'login') {
          this.login = true;
        } else {
          this.login = false;
        }
      }
    });
  }

  /**
   * signOut
   */
  public signOut() {
      this.loginService.logout();
      this.router.navigate(['/login']);
  }

  /**
   * buscarPelicula
   *
   * Search for a specific movie
   *
   * @param texto MovieTitle
   */
  public buscarPelicula(texto: string) {
    if (texto.length === 0) {
      return;
    }
    this.router.navigate(['buscar', texto]);
  }


}
