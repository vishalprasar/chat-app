import { Injectable } from '@angular/core';
import {HttpClient,HttpParams,HttpErrorResponse,HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cookie } from 'ng2-cookies/ng2-cookies';
@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http:HttpClient) { }
  private baseUrl = 'https://chatapi.edwisor.com';

 public getUserInfoFromLocalStorage(){
   return JSON.parse(localStorage.getItem('userInfo'));
 }

 public setUserInfoFromLocalStorage(data){
      localStorage.setItem('userInfo',JSON.stringify(data));
 }
  public signUpFunction(data):Observable<any>{
    const params = new HttpParams()
    .set('firstName',data.firstName)
    .set('lastName',data.lastName)
    .set('email',data.email)
    .set('mobile',data.mobile)
    .set('apiKey',data.apiKey)
    .set('password',data.password);
      return this.http.post(`${this.baseUrl}/api/v1/users/signup`,params);
  }  // end of signup function


  public signInFunction(data):Observable<any>{
    const params = new HttpParams()
    .set('email',data.email)
    .set('password',data.password);
    return this.http.post(`${this.baseUrl}/api/v1/users/login`,params)
} // end of signin function

public logout(): Observable<any> {

  const params = new HttpParams()
    .set('authToken', Cookie.get('authtoken'))

  return this.http.post(`${this.baseUrl}/api/v1/users/logout`, params);

} // end logout function
}
