import { Component, OnInit } from '@angular/core';
import { ServiceDidyouknowApi } from '../service-didyouknow-api/service-didyouknow-api';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
	selector: 'app-component-awards',
	imports: [CommonModule, RouterModule],
	templateUrl: './component-awards.html',
	styleUrl: './component-awards.css',
	standalone: true,
})
export class ComponentAwards implements OnInit {

	awardsList: any[] = [];  // Array para armazenar os dados

	constructor(private apiService: ServiceDidyouknowApi) { }

	ngOnInit(): void {
		// Chama o método do serviço para buscar a lista
		this.apiService.getAwardsList().subscribe(data => {
			this.awardsList = data;  // Preenche a lista com os dados do backend
		});
	}
}