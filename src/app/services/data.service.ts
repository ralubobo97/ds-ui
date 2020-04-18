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
}
