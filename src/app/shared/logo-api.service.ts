import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment.development';
import {University} from '../universities/model/university.entity';

@Injectable({
  providedIn: 'root'
})
export class LogoApiService {

  baseUrl: string = environment.logoProviderApiBaseUrl;

  getUrlLogo(university:University):string {
    console.log(`getUrlToLogo: ${university}`);
    return `${this.baseUrl}/${new URL(university.url[0]).hostname}`;
  }
}
