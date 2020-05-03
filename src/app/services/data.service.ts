import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  headers: HttpHeaders = new HttpHeaders({
    'Content-Type': 'application/json'
  });

  options = {
    headers: this.headers
  }
  
  constructor(private http: HttpClient) { }

  addEmployee(form){
    return this.http.post('/api/employees/addEmployee', form, this.options);
  }

  editEmployee(form){
    return this.http.post('/api/employees/editEmployee', form, this.options);
  }

  getEmployees(){
    return this.http.get('/api/employees/getEmployees');
  }

  getEmployee(id){
    let params = new HttpParams().set('id', id);
    let options = { headers: this.headers, params };
    return this.http.get<any>('/api/employees/getEmployee', options);
  }

  deleteEmployee(id){
    let params = new HttpParams().set('id', id);
    let options = { headers: this.headers, params };
    return this.http.delete('/api/employees/deleteEmployee', options);
  }

  getContracts(){
    return this.http.get('/api/employees/getContracts');
  }

  editContract(contract){
    return this.http.post('/api/employees/editContract', contract, this.options);
  }

  getCompetitors(){
    return this.http.get('/api/competitors/getCompetitors');
  }

  addCompetitor(form){
    return this.http.post('/api/competitors/addCompetitor', form, this.options);
  }

  deleteCompetitor(id){
    let params = new HttpParams().set('id', id);
    let options = { headers: this.headers, params };
    return this.http.delete('/api/competitors/deleteCompetitor', options);
  }

  editCompetitor(form){
    return this.http.post('/api/competitors/editCompetitor', form, this.options);
  }

  addService(form){
    return this.http.post('/api/services/addService', form, this.options);
  }

  getServices(){
    return this.http.get('/api/services/getServices');
  }

  getService(id){
    let params = new HttpParams().set('id', id);
    let options = { headers: this.headers, params };
    return this.http.get<any>('/api/services/getService', options);
  }

  editService(form){
    return this.http.post('/api/services/editService', form, this.options);
  }

  deleteService(id){
    let params = new HttpParams().set('id', id);
    let options = { headers: this.headers, params };
    return this.http.delete('/api/services/deleteService', options);
  }

  getForecasts(){
    return this.http.get('/api/services/getForecasts');
  }

  getCustomers(){
    return this.http.get('/api/customers/getCustomers');
  }

  addCustomer(form){
    return this.http.post('/api/customers/addCustomer', form, this.options);
  }

  deleteCustomer(id){
    let params = new HttpParams().set('id', id);
    let options = { headers: this.headers, params };
    return this.http.delete('/api/customers/deleteCustomer', options);
  }

  getCompanies(){
    return this.http.get('/api/customers/getCompanies');
  }

  addCompany(form){
    return this.http.post('/api/customers/addCompany', form, this.options);
  }

  getCompany(id){
    let params = new HttpParams().set('id', id);
    let options = { headers: this.headers, params };
    return this.http.get<any>('/api/customers/getCompany', options);
  }

  editCompany(form){
    return this.http.post('/api/customers/editCompany', form, this.options);
  }

  getBills(){
    return this.http.get('/api/bills/getBills');
  }

  getMeetings(){
    return this.http.get('/api/employees/getMeetings');
  }

  addMeeting(body){
    return this.http.post('/api/employees/addMeeting', body, this.options);
  }

  getAvailableParticipants(startHour, endHour){
    let params = new HttpParams().set('startHour', startHour).set('endHour', endHour);
    let options = { headers: this.headers, params };
    return this.http.get<any>('/api/employees/getAvailableParticipants', options);
  }

  addParticipants(body){
    return this.http.post('/api/employees/addParticipants', body, this.options);
  }

  getParticipants(id){
    let params = new HttpParams().set('id', id);
    let options = { headers: this.headers, params };
    return this.http.get<any>('/api/employees/getParticipants', options);
  }

  getDeliveries(){
    return this.http.get('/api/customers/getDeliveries');
  }

  getDeliveryContents(id){
    let params = new HttpParams().set('id', id);
    let options = { headers: this.headers, params };
    return this.http.get<any>('/api/customers/getDeliveryContents', options);
  }
}
