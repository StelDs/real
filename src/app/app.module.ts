import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {AppRoutingModule} from "./app-routing.module";
import {HomeComponent} from "./ui/page/home/home.component";
import {HeaderComponent} from "./ui/component/header/header.component";
import {NotFoundComponent} from './ui/page/not-found/not-found.component';
import {FooterComponent} from './ui/component/footer/footer.component';
import {MatDialogModule} from "@angular/material/dialog";
import {MatButtonModule} from "@angular/material/button";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {LoginDialogComponent} from './ui/component/login-dialog/login-dialog.component';
import {MatInputModule} from "@angular/material/input";
import {MatIconModule} from "@angular/material/icon";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {RegistrationDialogComponent} from './ui/component/registration-dialog/registration-dialog.component';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatMenuModule} from "@angular/material/menu";
import {MatButtonToggleModule} from "@angular/material/button-toggle";
import {MatTreeModule} from "@angular/material/tree";
import {MatExpansionModule} from "@angular/material/expansion";
import {MatSelectModule} from "@angular/material/select";
import {MatCardModule} from "@angular/material/card";
import {SmartSelectionComponent} from './ui/page/smart-selection/smart-selection.component';
import {MatSliderModule} from "@angular/material/slider";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatListModule} from "@angular/material/list";
import {OverlayContainer, OverlayModule} from "@angular/cdk/overlay";
import {HttpClientModule} from "@angular/common/http";
import {PlaceAdComponent} from './ui/page/place-ad/place-ad.component';
import {ProfileComponent} from './ui/page/profile/profile.component';
import {ApartmentComponent} from './ui/page/apartment/apartment.component';
import {MatTabsModule} from "@angular/material/tabs";
import {ProfileTabComponent} from './ui/component/profile-tab/profile-tab.component';
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MAT_DATE_LOCALE, MatNativeDateModule, NativeDateModule} from "@angular/material/core";
import {SearchComponent} from './ui/page/search/search.component';
import {SearchApartmentCardComponent} from './ui/component/search-apartment-card/search-apartment-card.component';
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {MatTooltipModule} from "@angular/material/tooltip";
import {MAT_FORM_FIELD_DEFAULT_OPTIONS} from "@angular/material/form-field";
import {MatCarouselModule} from "ng-mat-carousel";
import { PhoneDialogComponent } from './ui/page/search/ui/component/phone-dialog/phone-dialog.component';
import { DefaultSearchComponent } from './ui/page/default-search/default-search.component';
import { FileUploadComponent } from './ui/component/file-upload/file-upload.component';
import {MatPaginatorModule} from "@angular/material/paginator";


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    NotFoundComponent,
    FooterComponent,
    LoginDialogComponent,
    RegistrationDialogComponent,
    SmartSelectionComponent,
    PlaceAdComponent,
    ProfileComponent,
    ApartmentComponent,
    ProfileTabComponent,
    SearchComponent,
    SearchApartmentCardComponent,
    PhoneDialogComponent,
    DefaultSearchComponent,
    FileUploadComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        MatDialogModule,
        MatButtonModule,
        BrowserAnimationsModule,
        MatInputModule,
        MatIconModule,
        ReactiveFormsModule,
        MatToolbarModule,
        MatMenuModule,
        MatButtonToggleModule,
        MatTreeModule,
        MatExpansionModule,
        MatSelectModule,
        MatCardModule,
        MatSliderModule,
        MatCheckboxModule,
        MatListModule,
        OverlayModule,
        HttpClientModule,
        MatTabsModule,
        MatDatepickerModule,
        MatDatepickerModule,
        NativeDateModule,
        MatNativeDateModule,
        MatSnackBarModule,
        MatTooltipModule,
        MatCarouselModule.forRoot(),
        FormsModule,
        MatPaginatorModule,
    ],
  providers: [
    OverlayContainer,
    {provide: MAT_DATE_LOCALE, useValue: 'ru-RU'},
    {
      provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
      useValue: {
        subscriptSizing: 'dynamic'
      }
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
