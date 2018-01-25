import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NotFoundComponent } from './core/components';
import { MainContainerComponent } from './shared/components';

const routes: Routes = [
  { path: '', redirectTo: 'todolist', pathMatch: 'full' },
  { path: 'todolist', component: MainContainerComponent },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { useHash: true })
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
