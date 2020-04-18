import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AuthService } from './services/auth.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './shared/header/header.component';
import { LoginComponent } from './components/login/login.component';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { SidebarModule } from 'primeng/sidebar';
import { HomeComponent } from './components/home/home.component';
import { EmployeesComponent } from './components/employees/employees.component';
import { MatTableModule } from '@angular/material/table';
import { AddEmployeeComponent } from './components/employees/components/add-employee/add-employee.component';
import { EditEmployeeComponent } from './components/employees/components/edit-employee/edit-employee.component';
import { ContractsComponent } from './components/employees/components/contracts/contracts.component';
import { InputTextModule } from 'primeng/inputtext';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    HomeComponent,
    EmployeesComponent,
    AddEmployeeComponent,
    EditEmployeeComponent,
    ContractsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    SidebarModule,
    MatTableModule,
    InputTextModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
