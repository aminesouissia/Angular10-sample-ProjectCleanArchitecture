/*
 * @Author: amine.souissia
 * @Author.email: amine.swayssia@gmail.com
 * @Date: 2020-09-10 19:03:01
 * @Last Modified by: amine.souissia
 * @Last Modified time: 2020-09-10 19:04:06
 * Copyright (c) 2020 CodeLab360, Inc
 */
import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MonappRoutingModule {}
