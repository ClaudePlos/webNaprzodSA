import {Component, Input} from 'angular2/core';
import {Experiment} from '../../common/experiment.model';

@Component({
  selector: 'experiment',
  templateUrl: 'app/inne1/inne1-details/inne1.detail.component.html',
  styles: [`
    .experiment {
      cursor: pointer;
      outline: 1px lightgray solid;
      padding: 5px;
      margin: 5px;
    }
  `]
})

export class Inne1DetailComponent {
  @Input() experiment: Experiment;

  doExperiment(): void {
    this.experiment.completed += 1;
  };
}
