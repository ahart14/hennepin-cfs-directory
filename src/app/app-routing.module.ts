import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactsComponent }    from './contacts/contacts.component';
import { DashboardComponent }   from './dashboard/dashboard.component';
import { ContactDetailComponent }  from './contact-detail/contact-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  // { path: 'dashboard', component: DashboardComponent },
  // { path: 'contacts', component: ContactsComponent },
  { path: '', component: ContactsComponent },
  { path: 'detail/:id', component: ContactDetailComponent },
]; 

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ]
})
export class AppRoutingModule {}
