import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostsComponent } from './posts/posts.component';
import { FormsModule }   from '@angular/forms';


import { PostsService } from './posts.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ModalComponent } from './posts/modal/modal.component';
import { MatDialogModule } from '@angular/material/dialog';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    ModalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatDialogModule,
    NgxPaginationModule,
    FormsModule,
  ],
  providers: [
    HttpClientModule,
    PostsService, 
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
