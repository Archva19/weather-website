export interface Current {
  temperature: number;
  feelsLike: number;
  condition: string;
  description: string;
  humidity: number;
  cloudiness: number;
  wind: number;
  windDirection: string;
  icon: string;
  background: string;
}

export interface Details {
  tempMax: number;
  tempMin: number;
  humidity: number;
  cloudiness: number;
  wind: number;
  precipitation: number;
  visibility: number;
}

export interface ForecastItem {
  date: string;
  day: string;
  temperature: number;
  tempMin: number;
  tempMax: number;
  condition: string;
  description: string;
  icon: string;
  humidity?: number;
  cloudiness?: number;
  wind?: number;
  precipitation?: number;
  visibility?: number;
}

export interface City {
  id: number;
  name: string;
  country: string;
  countryCode: string;
  latitude: number;
  longitude: number;
  timezone: string;
  current: Current;
  details: Details;
  forecast: ForecastItem[];
}
