export interface CacheStore{
  pagination: PaginationData;
  generalFilter:Filtro;
}
export interface PaginationData {
  currentPage: number;
  objectsPerPage: number;
}
export interface Filtro{
  CodigoEtiqueta: string;
}
