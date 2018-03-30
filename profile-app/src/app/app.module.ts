import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

// components
import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';
import { ProfileItemComponent } from './profile/profile-item';
import { UserComponent } from './user/user.component';
// services
import { ProfileService } from './profile.service';


@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    ProfileItemComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [ProfileService],
  bootstrap: [AppComponent]
})
export class AppModule { }
