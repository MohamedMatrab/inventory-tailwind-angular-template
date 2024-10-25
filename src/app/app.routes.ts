import {Routes} from "@angular/router";
export const routes: Routes = [
  {
    //here we have all elements contained in the layout - like home - sells (clients - orders - invoices ) - purchases (....)
    path: '',
    loadChildren: () => import('./modules/layout/layout.module').then((m) => m.LayoutModule),
  },
  { path: '**', redirectTo: '' },
];
