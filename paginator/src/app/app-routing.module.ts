import { TableWithPaginatorComponent } from './table-with-paginator/table-with-paginator.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'', redirectTo:'table', pathMatch:'full'},
  {path:'table',component:TableWithPaginatorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
