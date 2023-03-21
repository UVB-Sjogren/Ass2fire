//Angular modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from "@angular/forms";
//Firebase and uth components
import {AuthService} from "./shared/services/auth.service";
import {provideFirebaseApp} from "@angular/fire/app";
import { AngularFireModule} from "@angular/fire/compat";
import { environment} from "../environments/environment";
import { AngularFirestoreModule} from "@angular/fire/compat/firestore";
import { AngularFireAuthModule} from "@angular/fire/compat/auth";
import {initializeApp} from "firebase/app";
import {provideFirestore,getFirestore} from "@angular/fire/firestore";
import {provideStorage,getStorage} from "@angular/fire/storage";
import {provideAuth,getAuth} from "@angular/fire/auth";
//Mina components
import { SidenavComponent} from "./components/sidenav.component";
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { SignInComponent } from './user/sign-in/sign-in.component';
import { ForgotPasswordComponent } from './user/forgot-password/forgot-password.component';
import { VerifyEmComponent } from './user/verify-em/verify-em.component';
import {ValkommenComponent} from "./components/valkommen.component";
import {KontaktaComponent} from "./components/kontakta.component";
import { FooterComponent} from "./components/footer.component";
import { HeaderComponent} from "./components/header.component";
import {SpelListaComponent} from "./components/bradspel/spel/spe-lista.component";
import {BradspelComponent} from "./components/bradspel/bradspel.component";
import {AddComponent} from "./components/bradspel/add/add.component";
import {SpelBeskrivningComponent} from "./components/bradspel/spel/spel-beskrivning.component";


@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    ForgotPasswordComponent,
    VerifyEmComponent,
    SidenavComponent,
    ValkommenComponent,
    KontaktaComponent,
    FooterComponent,
    HeaderComponent,
    SpelListaComponent,
    BradspelComponent,
    AddComponent,
    SpelBeskrivningComponent
  ],
  imports: [
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFirestoreModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    provideFirebaseApp(() => initializeApp(environment.firebaseConfig)),
    provideAuth(()=> getAuth()),
    provideFirestore(()=> getFirestore()),
    provideStorage(()=> getStorage()),
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
