import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { environment } from '../../../environments/environment';
import { ServerErrorComponent } from './server-error/server-error.component';

const routes: Routes = [
  {
    path: '404-not-found',
    component: NotFoundComponent,
    data: {
      title: `${environment.seo.title} Page Not Found`,
      description: environment.seo.description,
      metas: {
        ...environment.seo.metas,
      },
    },
  },
  {
    path: '500-server-error',
    component: ServerErrorComponent,
    data: {
      title: `${environment.seo.title} Action crashed`,
      description: environment.seo.description,
      metas: {
        ...environment.seo.metas,
      },
    },
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OtherRoutingModule { }
