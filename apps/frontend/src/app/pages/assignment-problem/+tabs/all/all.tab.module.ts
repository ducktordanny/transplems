import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {TabsModule} from '../tabs.module';

import {AllTabComponent} from './all.tab.component';

const routes: Routes = [{path: '', component: AllTabComponent}];

@NgModule({
  declarations: [AllTabComponent],
  imports: [TabsModule, RouterModule.forChild(routes)],
})
export class AllTabModule {}
