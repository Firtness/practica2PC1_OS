

export class University {
  name: string
  country: string
  countryCode: string
  domains: string[] //domains
  url: string[] //webPages
  urlToLogo: string


  constructor() {
    this.name = '';
    this.country = '';
    this.countryCode = '';
    this.url = [];
    this.domains = [];
    this.urlToLogo = '';
  }
}
