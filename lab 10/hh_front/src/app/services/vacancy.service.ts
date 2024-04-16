import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Vacancy } from '../models';

@Injectable({
  providedIn: 'root'
})
export class VacancyService {

  private BASE_URL = 'http://127.0.0.1:8000/api';

  constructor(private client: HttpClient) { }

  getVacancies(): Observable<Vacancy[]> {
    return this.client.get<Vacancy[]>(`${this.BASE_URL}/vacancies/`)
  }

  getCompanyVacancies(id: number): Observable<Vacancy[]> {
    return this.client.get<Vacancy[]>(`${this.BASE_URL}/companies/${id}/vacancies`)
  }

  getVacancy(id: number): Observable<Vacancy> {
    return this.client.get<Vacancy>(`${this.BASE_URL}/vacancies/${id}`)
  }

  deleteVacancy(id: number): Observable<any> {
    return this.client.delete(`${this.BASE_URL}/vacancies/${id}/`)
  } 

}
