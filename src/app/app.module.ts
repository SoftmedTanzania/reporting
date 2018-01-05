import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';
import { StoreModule } from '@ngrx/store';
import { RouterStateSerializer, StoreRouterConnectingModule } from '@ngrx/router-store';

import { ReportingRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import { environment } from '../environments/environment';
import { reducers } from './store/reducers';
import { DataService } from './shared/services/data.service';
import { HttpClientService } from './shared/services/http-client.service';
import { EffectsModule } from '@ngrx/effects';
import { effects } from './store/effects';
import { CustomSerializer } from './store/reducers/router.reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import * as fromGuards from './guards';
import {OrgUnitService} from './shared/services/org-unit.service';
import {VisualizerService} from './shared/services/visualizer.service';
import {FilterService} from './shared/services/filter.service';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './modules/user/user.component';
import { PasswordComponent } from './modules/user/password/password.component';
import { SettingsComponent } from './modules/settings/settings.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { ReportsComponent } from './modules/reports/reports.component';
import { FormsManagementComponent } from './modules/forms-management/forms-management.component';
import { LocationComponent } from './modules/location/location.component';
import { DataEntryComponent } from './modules/data-entry/data-entry.component';
import { TeamComponent } from './modules/user/team/team.component';
import { TeamMembersComponent } from './modules/user/team-members/team-members.component';
import { UsersComponent } from './modules/user/users/users.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    UserComponent,
    PasswordComponent,
    SettingsComponent,
    DashboardComponent,
    ReportsComponent,
    FormsManagementComponent,
    LocationComponent,
    DataEntryComponent,
    TeamComponent,
    TeamMembersComponent,
    UsersComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ReportingRoutingModule,
    NgxPaginationModule,
    StoreModule.forRoot(reducers),
    StoreRouterConnectingModule,
    EffectsModule.forRoot(effects),
    !environment.production ? StoreDevtoolsModule.instrument({maxAge: 100}) : []
  ],
  providers: [
    { provide: RouterStateSerializer, useClass: CustomSerializer },
    DataService,
    HttpClientService,
    OrgUnitService,
    VisualizerService,
    FilterService,
    ...fromGuards.guards
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }