import { Raee } from "./raee.interface";

export interface CacheStore{
  ListadoRaeeComponent: RaeeData;
  pagination: PaginationData;
}
export interface RaeeData{

  ListadoRaee: Raee[];
}
export interface PaginationData {
  currentPage: number;
  objectsPerPage: number;
}
