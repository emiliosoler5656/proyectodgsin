import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { TownsComponent } from './components/towns/towns.component';
import { CreateComponent } from './components/create/create.component';
import { DetailComponent } from './components/detail/detail.component';
import { EditComponent } from './components/edit/edit.component';
import { ResetComponent } from './components/reset/reset.component';
import { ChartsComponent } from './components/charts/charts.component';

const appRoutes: Routes = [
	{ path: 'home', component: HomeComponent},
	{ path: 'towns', component: TownsComponent},
	{ path: 'new-town', component: CreateComponent},
	{ path: 'detail/:id', component: DetailComponent},
	{ path: 'update/:id', component: EditComponent},
	{ path: 'load-initial-data', component: ResetComponent},
	{ path: 'charts', component: ChartsComponent},
	{ path: '**', component: HomeComponent}

];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);