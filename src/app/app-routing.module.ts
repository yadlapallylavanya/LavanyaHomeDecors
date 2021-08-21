import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { BathroomaccessoriesComponent } from './bathroomaccessories/bathroomaccessories.component';
import { ContactusComponent } from './contactus/contactus.component';
import { DecorationitemsComponent } from './decorationitems/decorationitems.component';
import { DiningitemsComponent } from './diningitems/diningitems.component';
import { ElectronicsComponent } from './electronics/electronics.component';
import { FurnituresComponent } from './furnitures/furnitures.component';
import { HomeComponent } from './home/home.component';
import { HomefurnishingsComponent } from './homefurnishings/homefurnishings.component';
import { KitchenwareComponent } from './kitchenware/kitchenware.component';
import { LoginComponent } from './login/login.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { SignupComponent } from './signup/signup.component';
import { WalldecorsComponent } from './walldecors/walldecors.component';
import { WoodenitemsComponent } from './woodenitems/woodenitems.component';

const routes: Routes = [
  {path:'home',component:HomeComponent},
    {path:'aboutus',component:AboutusComponent},
    {path:'contactus',component:ContactusComponent},
    {path:'login',component:LoginComponent},
    {path:'signup',component:SignupComponent},
    {path:'furnitures',component:FurnituresComponent},
    {path:'walldecors',component:WalldecorsComponent},
    {path:'woodenitems',component:WoodenitemsComponent},
    {path:'homefurnishings',component:HomefurnishingsComponent},
    {path:'electronics',component:ElectronicsComponent},
    {path:'diningitems',component:DiningitemsComponent},
    {path:'kitchenware',component:KitchenwareComponent},
    {path:'decorationitems',component:DecorationitemsComponent},
    {path:'bathroomaccessories',component:BathroomaccessoriesComponent},
    {path:'',redirectTo:'home',pathMatch:'full'},
    {path:'**',component:PagenotfoundComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
