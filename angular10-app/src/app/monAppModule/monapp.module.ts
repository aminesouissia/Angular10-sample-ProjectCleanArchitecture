/*
 * @Author: amine.souissia
 * @Author.email: amine.swayssia@gmail.com
 * @Date: 2020-09-10 19:03:01
 * @Last Modified by: amine.souissia
 * @Last Modified time: 2020-09-10 19:04:15
 * Copyright (c) 2020 CodeLab360, Inc
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { MonappRoutingModule } from './monapp-routing.module';


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    MonappRoutingModule
  ],
  exports: [
    HomeComponent
  ],
  providers: []
})
export class MonappModule { }
