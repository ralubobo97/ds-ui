import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { EmployeesComponent } from './components/employees/employees.component';
import { AddEmployeeComponent } from './components/employees/components/add-employee/add-employee.component';
import { EditEmployeeComponent } from './components/employees/components/edit-employee/edit-employee.component';
import { ContractsComponent } from './components/employees/components/contracts/contracts.component';
import { CompetitorsComponent } from './components/competitors/competitors.component';
import { ServicesComponent } from './components/services/services.component';
import { AddServiceComponent } from './components/services/components/add-service/add-service.component';
import { EditServiceComponent } from './components/services/components/edit-service/edit-service.component';
import { CustomersComponent } from './components/customers/customers.component';
import { AddCustomerComponent } from './components/customers/components/add-customer/add-customer.component';
import { BillsComponent } from './components/bills/bills.component';
import { DeliveriesComponent } from './components/deliveries/deliveries.component';
import { ReportsComponent } from './components/reports/reports.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'employees', component: EmployeesComponent },
  { path: 'add-employee', component: AddEmployeeComponent },
  { path: 'edit-employee/:id', component: EditEmployeeComponent },
  { path: 'contracts', component: ContractsComponent },
  { path: 'competitors', component: CompetitorsComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'add-service', component: AddServiceComponent },
  { path: 'edit-service/:id', component: EditServiceComponent },
  { path: 'customers', component: CustomersComponent },
  { path: 'add-customer', component: AddCustomerComponent },
  { path: 'bills', component: BillsComponent },
  { path: 'deliveries', component: DeliveriesComponent },
  { path: 'reports', component: ReportsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
