import { Raee, RaeeList } from "./raee.interface";

export interface CacheStore{
  ListadoRaeeComponent: RaeeData;
  pagination: PaginationData;
  generalFilter:Filtro;
}
export interface RaeeData{

  TablaRaee: RaeeList[];
}
export interface PaginationData {
  currentPage: number;
  objectsPerPage: number;
}
export interface Filtro{
  CodigoEtiqueta: string;
}
