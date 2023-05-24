import { Raee, RaeeList } from "./raee.interface";

export interface CacheStore{
  ListadoRaeeComponent: RaeeData;
  pagination: PaginationData;
}
export interface RaeeData{

  TablaRaee: RaeeList[];
}
export interface PaginationData {
  currentPage: number;
  objectsPerPage: number;
}
