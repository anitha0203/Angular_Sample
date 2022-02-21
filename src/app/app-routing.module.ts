import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { SignInComponent } from './user/sign-in/sign-in.component';
import { SignUpComponent } from './user/sign-up/sign-up.component';
import { Signup1Component } from './signup1/signup1.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { SignuppageComponent } from './signuppage/signuppage.component';
import { SqldatapageComponent } from './sqldatapage/sqldatapage.component';
import { AddemppageComponent } from './addemppage/addemppage.component';
import { DeletepageComponent } from './deletepage/deletepage.component';
import { Loginpage1Component } from './loginpage1/loginpage1.component';
import { Signuppage1Component } from './signuppage1/signuppage1.component';
import { Loginpage2Component } from './loginpage2/loginpage2.component';
import { EmailloginComponent } from './emaillogin/emaillogin.component';
import { LibraryComponent } from './library/library.component';
import { AddbooksComponent } from './addbooks/addbooks.component';
import { TookbookComponent } from './tookbook/tookbook.component';
import { AddstudentdetailsComponent } from './addstudentdetails/addstudentdetails.component';

const routes: Routes = [
  {path:'user' , component: UserComponent},
  {  
     path:'signin', component: UserComponent,
     children:[{path:'', component: SignInComponent}]
  },
  {  
    path:'signup', component: UserComponent,
    children:[{path:'', component: SignUpComponent}]
  },
  {path:'signup', component: Signup1Component},
  {path:'signuppage', component:SignuppageComponent},
  {path:'loginpage', component:LoginpageComponent},
  {path:'sqldatapage', component:SqldatapageComponent},
  {path:'addemppage', component: AddemppageComponent},
  {path:'deletepage', component:DeletepageComponent},
  {path:'loginpage1', component:Loginpage1Component},
  {path:'signuppage1', component:Signuppage1Component},
  {path:'loginpage2', component:Loginpage2Component},
  {path:'emaillogin', component:EmailloginComponent},
  {path:'library', component:LibraryComponent},
  {path:'addbooks', component:AddbooksComponent},
  {path:'tookbook', component:TookbookComponent},
  {path:'addstudentdetails', component:AddstudentdetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
