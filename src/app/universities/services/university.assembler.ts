import {UniversitiesResponse, UniversityResource} from './universities.response';
import {University} from '../model/university.entity';
import {LogoApiService} from '../../shared/logo-api.service';

/**
 * @summary Assembler class to convert API response data into University entities.
 * @author Jose Alejo
 */
export class UniversityAssembler {
  static logoApiService: LogoApiService;

  /**
   * @summary Configures the logo service for the assembler class.
   * @author Jose Alejo
   */
  static withLogoApiService(logoApiService: LogoApiService) {
    this.logoApiService = logoApiService;
    return this;
  }

  /**
   * @summary Converts a UniversityResource into a University entity.
   * @author Jose Alejo
   */
  static toEntityFromResource(resource:UniversityResource): University {

    const university = new University();
    university.name = resource.name;
    university.country = resource.country;
    university.countryCode = resource.alpha_two_code;
    university.domains = resource.domains;
    university.url = resource.web_pages;
    university.urlToLogo = this.logoApiService.getUrlLogo(university);

    return university
  }

  /**
   * @summary Converts a UniversitiesResponse into an array of University entities.
   * @author Jose Alejo
   */
  static toEntitiesFromResponse(response: UniversitiesResponse): University[] {
    console.log('response.universities:', response);
    return response.map(university => this.toEntityFromResource(university));
  }


}
