import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { PostDashboredComponent } from './shared/component/post-dashbored/post-dashbored.component';
import { PostComponent } from './shared/component/post/post.component';
import { PostFormComponent } from './shared/component/post-form/post-form.component';
import { NavbarComponent } from './shared/component/navbar/navbar.component';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    PostDashboredComponent,
    PostComponent,
    PostFormComponent,
    NavbarComponent,
    
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
   
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
