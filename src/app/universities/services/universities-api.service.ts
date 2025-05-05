import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {LogoApiService} from '../../shared/logo-api.service';
import {map, Observable} from 'rxjs';
import {University} from '../model/university.entity';
import {UniversitiesResponse} from './universities.response';
import {environment} from '../../../environments/environment';
import {UniversityAssembler} from './university.assembler';

@Injectable({
  providedIn: 'root'
})
export class UniversitiesApiService {
  private baseUrl: string = environment.universityProviderApiBaseUrl;
  private universitiesEndpoint: string = environment.universityProviderEndpointPath;

  constructor(private http:HttpClient, private logoApiService:LogoApiService) {
  }

  getUniversities():Observable<University[]> {
    return this.http.get<UniversitiesResponse>(`${this.baseUrl}${this.universitiesEndpoint}`)
      .pipe(
        map(response => UniversityAssembler.withLogoApiService(this.logoApiService).toEntitiesFromResponse(response))
      );
  }
}
