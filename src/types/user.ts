export interface GendersShow {
  male: boolean;
  female: boolean;
}

export interface User {
  UserName: string;
  FirstName: string;
  LastName: string;
  MiddleName: string | null;
  Gender: string | null;
  Age: number | null;
  Emails: string[];
  FavoriteFeature: string;
  Features: string[];
  AddressInfo: {
    Address: string;
    City: {
      Name: string;
      CountryRegion: string;
      Region: string;
    };
  }[];
  HomeAddress: string | null;
}
