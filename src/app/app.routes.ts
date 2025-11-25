import { Routes } from '@angular/router';

import { ComponentHome } from './component-home/component-home';
import { ComponentDidyouknow } from './component-didyouknow/component-didyouknow';
import { ComponentAwards } from './component-awards/component-awards';

export const routes: Routes = [
	{ path: '', component: ComponentHome },
	{ path: 'didyouknow', component: ComponentDidyouknow },
	{ path: 'awards', component: ComponentAwards }
];