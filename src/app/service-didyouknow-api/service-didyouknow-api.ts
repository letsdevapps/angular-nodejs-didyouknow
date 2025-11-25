import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ServiceDidyouknowApi {
	private baseUrl = 'http://localhost:8080/api';  // URL do seu backend Spring Boot

	constructor(private http: HttpClient) { }

	// Método para buscar a lista de 'didyouknowList'
	getDidYouKnowList(): Observable<any[]> {
		return this.http.get<any[]>(`${this.baseUrl}/didyouknow/all`);
	}

	getDidYouKnowRandom(): Observable<any[]> {
		return this.http.get<any[]>(`${this.baseUrl}/didyouknow/random`);
	}

	getAwardsList(): Observable<any[]> {
		return this.http.get<any[]>(`${this.baseUrl}/awards/all`);
	}

	getAwardsRandom(): Observable<any[]> {
		return this.http.get<any[]>(`${this.baseUrl}/awards/random`);
	}
}