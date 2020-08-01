import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  public access_token = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiOWVjNjhiODViODRjMDgyOTBiNzNmMmZkYWYwMTA1MyIsInN1YiI6IjVmMDdhZDY2ZDVmZmNiMDAzNDgzOTQ2NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.y00XEvTj7NP5hgzuQSLT8FK9SXBkai0AJxUhpJYXGPo';

  /**
   * Constructor
   */
  constructor() { }

  /**
   * login
   *
   * Set token on localStorage (hardcoded because the API doesn't have an endpoint for login)
   */
  public login() {
    localStorage.setItem('token', this.access_token);
  }

  /**
   * logout
   *
   * Clear localStorage
   */
  public logout() {
      localStorage.clear();
  }
}
