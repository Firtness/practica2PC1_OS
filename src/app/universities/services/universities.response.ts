export type UniversitiesResponse = UniversityResource[];

export interface UniversityResource {
  name: string;
  country: string;
  alpha_two_code: string;
  web_pages: string[];
  domains: string[];
  //url
}
