import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {TransportProblemService} from '../../transport-problem.service';
import {TabsModule} from '../tabs.module';

import {AllTabComponent} from './all-tab.component';

const routes: Routes = [{path: '', component: AllTabComponent}];

@NgModule({
  declarations: [AllTabComponent],
  imports: [RouterModule.forChild(routes), TabsModule],
  providers: [TransportProblemService],
})
export class AllTabModule {}
