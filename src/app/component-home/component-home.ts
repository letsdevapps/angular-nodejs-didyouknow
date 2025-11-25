import { Component, OnInit } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ServiceDidyouknowApi } from '../service-didyouknow-api/service-didyouknow-api';

@Component({
  selector: 'app-component-home',
  imports: [HttpClientModule],
  templateUrl: './component-home.html',
  styleUrl: './component-home.css'  ,
  standalone: true,
})
export class ComponentHome implements OnInit {

	didyouknowRandom: any;
	awardsRandom: any;

	constructor(private apiService: ServiceDidyouknowApi) {}

	ngOnInit(): void {
        this.apiService.getDidYouKnowRandom().subscribe(data => {
			this.didyouknowRandom = data;  // Preenche a lista com os dados do backend
	    });

		this.apiService.getAwardsRandom().subscribe(data => {
			this.awardsRandom = data;
		});
    }
}
