import { Injectable, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, delay, map, of, tap } from 'rxjs';
import { CacheStore } from '../interfaces/cache-store.interface';
import { Raee } from '../interfaces/raee.interface';

@Injectable({ providedIn: 'root' })
export class RaeeService {
  private apiUrl: string = '/api/objetos';
  public cacheStore: CacheStore;

  constructor(private http: HttpClient) {
    this.loadFromLocalStorage();
  }
  OnDestroy(){
    this.saveToLocalStorage();
  }

  public saveToLocalStorage() {
    localStorage.setItem('cacheStore', JSON.stringify(this.cacheStore));
  }

  private loadFromLocalStorage() {
    const storedCache = localStorage.getItem('cacheStore');
    if (storedCache) {
      this.cacheStore = JSON.parse(storedCache);
    } else {
      this.cacheStore = {
        ListadoRaeeComponent: { ListadoRaee: [] },
        pagination: { currentPage: 1, objectsPerPage:  2}
      };
      this.saveToLocalStorage();
    }
  }

  private getRaeeRequest(url: string): Observable<Raee[]> {
    return this.http.get<Raee[]>(url).pipe(
      catchError(error => of([])),
      delay(2000)
    );
  }

  searchRaee(): Observable<Raee[]> {
    const url = `${this.apiUrl}`;
    return this.getRaeeRequest(url).pipe(
      tap(raee => {
        this.cacheStore.ListadoRaeeComponent = { ListadoRaee: raee };
        this.saveToLocalStorage();
      })
    );
  }

  searchRaeeById(code: number): Observable<Raee | null> {
    const url = `${this.apiUrl}?idLectura=${code}`;
    return this.http.get<Raee[]>(url).pipe(
      map(CargaDatosLecturasId => CargaDatosLecturasId.length > 0 ? CargaDatosLecturasId[0] : null),
      catchError(error => of(null))
    );
  }
}
