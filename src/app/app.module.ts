import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { FooterComponent } from './footer/footer.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { FurnituresComponent } from './furnitures/furnitures.component';
import { WalldecorsComponent } from './walldecors/walldecors.component';
import { WoodenitemsComponent } from './woodenitems/woodenitems.component';
import { HomefurnishingsComponent } from './homefurnishings/homefurnishings.component';
import { ElectronicsComponent } from './electronics/electronics.component';
import { DiningitemsComponent } from './diningitems/diningitems.component';
import { KitchenwareComponent } from './kitchenware/kitchenware.component';
import { DecorationitemsComponent } from './decorationitems/decorationitems.component';
import { BathroomaccessoriesComponent } from './bathroomaccessories/bathroomaccessories.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutusComponent,
    ContactusComponent,
    FooterComponent,
    PagenotfoundComponent,
    LoginComponent,
    SignupComponent,
    FurnituresComponent,
    WalldecorsComponent,
    WoodenitemsComponent,
    HomefurnishingsComponent,
    ElectronicsComponent,
    DiningitemsComponent,
    KitchenwareComponent,
    DecorationitemsComponent,
    BathroomaccessoriesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
