import {ChangeDetectionStrategy, Component} from '@angular/core';

import {UntilDestroy} from '@ngneat/until-destroy';

export interface Tab {
  label: string;
  link: string;
}

@UntilDestroy()
@Component({
  selector: 'transport-problem-page',
  templateUrl: './transport-problem.template.html',
  styles: [
    `
      .tab-content-wrapper {
        padding: 8px;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TransportProblemPageComponent {
  public readonly tabs: Array<Tab> = [
    {label: 'TRANSPORTATION_PROBLEM.TABS.ALL', link: 'all'},
    {label: 'TRANSPORTATION_PROBLEM.TABS.SECOND_PHASE', link: 'second-phase'},
    {label: 'TRANSPORTATION_PROBLEM.TABS.EPSILON', link: 'epsilon'},
  ];
}
