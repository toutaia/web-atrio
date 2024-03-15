import {Injectable} from '@angular/core';
import {UserModel} from "../models/user.model";
import {Observable} from "rxjs";
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {JobModel} from "../models/job.model";

@Injectable({
  providedIn: 'root',
})
export class RequestService {
  baseURL = ''
  headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');

  constructor(private _http: HttpClient) {
  }

  addUser(newUser: UserModel) {

    return this._http.post('', newUser, {headers: this.headers})
  }

  getUsers(params?: HttpParams): Observable<Array<UserModel>> {
    return this._http.get<Array<UserModel>>(`${this.baseURL}?${params?.toString()}`)
  }

  getUsersByCompany(companyName: string): Observable<Array<UserModel>> {
    let params = new HttpParams().set('company', companyName)
    return this.getUsers(params);
  }

  getJobsByUserAndDateInterval(idUser: number, start: string, end: string): Observable<Array<JobModel>> {
    let params = new HttpParams().set('idUser', idUser).set('start', start).set('end', end)
    return this._http.get<Array<JobModel>>('`${this.baseURL}?${params.toString()}`')
  }
}
