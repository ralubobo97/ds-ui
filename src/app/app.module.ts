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
import { CompetitorsComponent } from './components/competitors/competitors.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule, MAT_DATE_LOCALE } from '@angular/material/core';
import { CompetitorFormComponent } from './components/competitors/components/competitor-form/competitor-form.component';
import { ServicesComponent } from './components/services/services.component';
import { TableModule } from 'primeng/table';
import { DropdownModule } from 'primeng/dropdown';
import { AddServiceComponent } from './components/services/components/add-service/add-service.component';
import { MatSelectModule } from '@angular/material/select';
import { EditServiceComponent } from './components/services/components/edit-service/edit-service.component';
import { CustomersComponent } from './components/customers/customers.component';
import { AddCustomerComponent } from './components/customers/components/add-customer/add-customer.component';
import { CompanyComponent } from './components/customers/components/company/company.component'; 
import { MatDialogModule } from '@angular/material/dialog';
import { BillsComponent } from './components/bills/bills.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { ToastModule } from 'primeng/toast';
import { ForecastsComponent } from './components/services/components/forecasts/forecasts.component';
import { CarouselModule } from 'primeng/carousel';
import { AddParticipantsComponent } from './components/home/components/add-participants/add-participants.component';
import { CheckboxModule } from 'primeng/checkbox';
import { AddEventComponent } from './components/home/components/add-event/add-event.component';
import { DeliveriesComponent } from './components/deliveries/deliveries.component';
import { ReportsComponent } from './components/reports/reports.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    HomeComponent,
    EmployeesComponent,
    AddEmployeeComponent,
    EditEmployeeComponent,
    ContractsComponent,
    CompetitorsComponent,
    CompetitorFormComponent,
    ServicesComponent,
    AddServiceComponent,
    EditServiceComponent,
    CustomersComponent,
    AddCustomerComponent,
    CompanyComponent,
    BillsComponent,
    ForecastsComponent,
    AddParticipantsComponent,
    AddEventComponent,
    DeliveriesComponent,
    ReportsComponent
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
    InputTextModule,
    MatDatepickerModule,
    MatNativeDateModule,
    TableModule,
    DropdownModule,
    MatSelectModule,
    MatDialogModule,
    MatExpansionModule,
    ToastModule,
    CarouselModule,
    CheckboxModule
  ],
  providers: [
    AuthService,
    {provide: MAT_DATE_LOCALE, useValue: 'ro-RO'} 
  ],
  entryComponents: [CompanyComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
