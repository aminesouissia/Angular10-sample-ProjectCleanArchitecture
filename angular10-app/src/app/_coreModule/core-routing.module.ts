/*
 * @Author: amine.souissia
 * @Author.email: amine.swayssia@gmail.com
 * @Date: 2020-09-10 18:55:53
 * @Last Modified by: amine.souissia
 * @Last Modified time: 2020-09-10 18:56:39
 * Copyright (c) 2020 CodeLab360, Inc
 */

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../monAppModule/home/home.component';
const routes: Routes = [

  { path: 'home', component: HomeComponent},

  { path: ''/* , redirectTo: 'login' */, pathMatch: 'full',
  loadChildren: () => import('../authModule/auth.module').then(m =>
  m.AuthModule)
  },

  { path: 'home',
     loadChildren: () => import('../monAppModule/monapp.module').then(m =>
     m.MonappModule)
   },

   { path: '**',
   loadChildren: () => import('../_sharedModule/shared.module').then(m =>
   m.SharedModule)
 }
];
@NgModule({
   imports: [RouterModule.forRoot(routes)],
   exports: [RouterModule]
})
export class CoreRoutingModule { }
