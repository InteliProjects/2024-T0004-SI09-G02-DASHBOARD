import { Component } from '@angular/core';
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environment'; 
import { OrganizationDetailsOne } from './DTOservices/organizationDetails';

@Injectable({
  providedIn: 'root'
})

export class ApiConnect {
    get<T>(url: string) {
      throw new Error('Method not implemented.');
    }
    public BASE_URL: string;
  
    constructor(private http: HttpClient) {
      this.BASE_URL = environment.BASE_URL; 
    }

    getZenklub():Observable<HttpResponse<any>> {
      return this.http.get<any>(`${this.BASE_URL}/api/zenklub`, { observe: 'response' })
      ;
    }

    GetTotalSessionsByDepartment():Observable<HttpResponse<any>> {
      return this.http.get<any>(`${this.BASE_URL}/dep`, { observe: 'response' })
      ;
    }

    getCID(): Observable<HttpResponse<any>> {
      return this.http.get<any>(`${this.BASE_URL}/api/cid`, { observe: 'response' })
      ;
    }

    getOrganization(): Observable<HttpResponse<any>> {
      return this.http.get<any>(`${this.BASE_URL}/api/organization`, { observe: 'response' })
      ;
    }

    getStiba(): Observable<HttpResponse<any>> {
      return this.http.get<any>(`${this.BASE_URL}/api/stiba`, { observe: 'response' })
      ;
    }
    getGptwEngage(): Observable<HttpResponse<any>> {
      return this.http.get<any>(`${this.BASE_URL}/engajamento`, { observe: 'response' })
      ;
    }

    getCertificateQuantity(): Observable<HttpResponse<any>> {
      return this.http.get<any>(`${this.BASE_URL}/certificate_quantity`, { observe: 'response' })
      ;
    }

    getAppointmentsQuantity(): Observable<HttpResponse<any>> {
      return this.http.get<any>(`${this.BASE_URL}/appointments_quantity`, { observe: 'response' })
      ;
    }

    getDaysAppointment(): Observable<HttpResponse<any>> {
      return this.http.get<any>(`${this.BASE_URL}/days_appointment`, { observe: 'response' })
      ;
    }

    getAppointmentSpecialty(): Observable<HttpResponse<any>> {
      return this.http.get<any>(`${this.BASE_URL}/appointment_specialty`, { observe: 'response' })
      ;
    }

    getCalendar(): Observable<HttpResponse<any>> {
      return this.http.get<any>(`${this.BASE_URL}/event_occurrences`, { observe: 'response' })
      ;
    }
  }