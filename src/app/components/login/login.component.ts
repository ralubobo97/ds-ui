import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email;
  password;
  
  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  login(form){
    this.authService.login(form.value).subscribe((token: string) => {
      localStorage.setItem('accessToken', token);
      this.router.navigate(['/']);
    }, err => alert(err.error));
  }
}
