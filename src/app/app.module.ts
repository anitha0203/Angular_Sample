import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { SignUpComponent } from './user/sign-up/sign-up.component';
import { SignInComponent } from './user/sign-in/sign-in.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Signup1Component } from './signup1/signup1.component';
import { LoginComponent } from './login/login.component';
import { Database1Component } from './database1/database1.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { SqldataComponent } from './sqldata/sqldata.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { SignuppageComponent } from './signuppage/signuppage.component';
import { SqldatapageComponent } from './sqldatapage/sqldatapage.component';
import { DefaultloginpageComponent } from './sqldatapage/defaultloginpage/defaultloginpage.component';
import { MatIconModule } from '@angular/material/icon';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AddemppageComponent } from './addemppage/addemppage.component';
import { MatMenuModule } from '@angular/material/menu';
import { NgMatSearchBarModule } from 'ng-mat-search-bar';
import { DeletepageComponent } from './deletepage/deletepage.component';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { Loginpage1Component } from './loginpage1/loginpage1.component';
import {MatNativeDateModule} from '@angular/material/core';
import {MatSelectModule} from '@angular/material/select';
import {MatRadioModule} from '@angular/material/radio';
import {MatGridListModule} from '@angular/material/grid-list';
import { Loginpage2Component } from './loginpage2/loginpage2.component';
import { Signuppage1Component } from './signuppage1/signuppage1.component';
import { EmailloginComponent } from './emaillogin/emaillogin.component';
import { LibraryComponent } from './library/library.component';
import { AddbooksComponent } from './addbooks/addbooks.component';
import { AddstudentdetailsComponent } from './addstudentdetails/addstudentdetails.component';
import { TookbookComponent } from './tookbook/tookbook.component';
@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    SignUpComponent,
    SignInComponent,
    Signup1Component,
    LoginComponent,
    Database1Component,
    SqldataComponent,
    LoginpageComponent,
    SignuppageComponent,
    SqldatapageComponent,
    DefaultloginpageComponent,
    AddemppageComponent,
    DeletepageComponent,
    Loginpage1Component,
    Loginpage2Component,
    Signuppage1Component,
    EmailloginComponent,
    LibraryComponent,
    AddbooksComponent,
    AddstudentdetailsComponent,
    TookbookComponent
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,NgMatSearchBarModule,MatAutocompleteModule,MatNativeDateModule,MatSelectModule,MatRadioModule,MatGridListModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatCardModule,
    MatToolbarModule,MatSidenavModule,
    MatIconModule,
    FlexLayoutModule,MatMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
