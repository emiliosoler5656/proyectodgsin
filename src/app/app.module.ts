import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { routing, appRoutingProviders } from './app.routing';
import { GoogleChartsModule } from 'angular-google-charts';

import { AppComponent } from './app.component';
import { TownsComponent } from './components/towns/towns.component';
import { CreateComponent } from './components/create/create.component';
import { EditComponent } from './components/edit/edit.component';
import { DetailComponent } from './components/detail/detail.component';
import { ErrorComponent } from './components/error/error.component';
import { ResetComponent } from './components/reset/reset.component';
import { MapsComponent } from './components/maps/maps.component';
import { ChartsComponent } from './components/charts/charts.component';
import { HomeComponent } from './components/home/home.component';
import { PaginationComponent } from './pagination/pagination.component';

@NgModule({
  declarations: [
    AppComponent,
    TownsComponent,
    CreateComponent,
    EditComponent,
    DetailComponent,
    ErrorComponent,
    ResetComponent,
    MapsComponent,
    ChartsComponent,
    HomeComponent,
    PaginationComponent
  ],
  imports: [
    BrowserModule,
    routing,
    HttpClientModule,
    FormsModule,
    GoogleChartsModule.forRoot()
  ],
  providers: [
  	appRoutingProviders
  ],
  bootstrap: [
  	AppComponent
  ]
})
export class AppModule { }
