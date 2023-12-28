import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./ui/page/home/home.component";
import {NotFoundComponent} from "./ui/page/not-found/not-found.component";
import {SmartSelectionComponent} from "./ui/page/smart-selection/smart-selection.component";
import {PlaceAdComponent} from "./ui/page/place-ad/place-ad.component";
import {ProfileComponent} from "./ui/page/profile/profile.component";
import {SearchComponent} from "./ui/page/search/search.component";
import {ApartmentComponent} from "./ui/page/apartment/apartment.component";
import {DefaultSearchComponent} from "./ui/page/default-search/default-search.component";


const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'home',
    redirectTo: '',
    component: HomeComponent
  },
  {
    path: 'search',
    component: SearchComponent
  },
  {
    path: 'smart-search',
    component: SmartSelectionComponent
  },
  {
    path: 'default-search',
    component: DefaultSearchComponent
  },
  {
    path: 'apartment',
    component: ApartmentComponent
  },
  {
    path: 'place-ad',
    component: PlaceAdComponent
  },
  {
    path: 'profile',
    component: ProfileComponent
  },
  {
    path: 'not-found',
    component: NotFoundComponent
  },
  {
    path: '**',
    component: NotFoundComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
