import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignInComponent } from './user/sign-in/sign-in.component';
import { ForgotPasswordComponent } from './user/forgot-password/forgot-password.component';
import { VerifyEmComponent } from './user/verify-em/verify-em.component';
import {ValkommenComponent} from "./components/valkommen.component";
import {KontaktaComponent} from "./components/kontakta.component";
import {BradspelComponent} from "./components/bradspel/bradspel.component";
import {AddComponent} from "./components/bradspel/add/add.component";
import {SpelListaComponent} from "./components/bradspel/spel/spe-lista.component";
// route guard
import { AuthGuard } from './shared/guard/auth.guard';
import {SpelBeskrivningComponent} from "./components/bradspel/spel/spel-beskrivning.component";

const routes: Routes = [
  { path: '',redirectTo: '/sign-in', pathMatch: 'full' },
  {path:'landing/valkommen', component: ValkommenComponent, canActivate: [AuthGuard]  },
  {path:'landing/kontakta', component: KontaktaComponent},
  {path:'bradspel', component: BradspelComponent},
  {path:'bradspel/add', component: AddComponent},
  { path: 'sign-in', component: SignInComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'verify-email-address', component: VerifyEmComponent },
  {path:'Spel/:SpelNamn', component: SpelBeskrivningComponent},

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
