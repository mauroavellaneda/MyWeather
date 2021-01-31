export const GET_WEATHER = "SET_WEATHER";
export const GET_LOADING = "SET_LOADING";
export const GET_ERROR = "SET_ERROR";
export const GET_ALERT = "SET_ALERT";

export interface Weather {
  description: String;
  icon: String;
  id: number;
  main: String;
}
export interface WeatherData {
  base: string;
  clouds: {
    all: number;
  };
  cod: {
    lon: number;
    lat: number;
  };
  dt: number;
  id: number;
  main: {
    feels_like: number;
    humidity: number;
    pressure: number;
    temp: number;
    temp_max: number;
    temp_min: number;
  };
  name: string;
  sys: {
    country: string;
    id: number;
    sunrise: number;
    sunset: number;
    type: number;
  };
  timezone: number;
  visibility: number;
  weather: Weather[];
  wind: {
    speed: number;
    deg: number;
  };
}
export interface WeatherError {
  cod: string;
  message: String;
}
export interface WeatherState {
  data: WeatherData | null;
  loading: boolean;
  error: string;
}
interface GetWeatherAction {
  type: typeof GET_WEATHER;
  payload: WeatherData;
}
interface SetLoadingAction {
  type: typeof SET_LOADING;
}
interface SetErrorAction {
  type: typeof SET_ERROR;
  payload: string;
}
export type WeatherAction =
  | GetWeatherAction
  | SetLoadingAction
  | SetErrorAction;

export interface AlertAction {
  type: typeof SET_ALERT;
  payload: string;
}
export interface AlertState {
  message: string;
}
