import {Component, OnInit} from 'angular2/core';
import {Inne1DetailComponent} from './inne1-details/inne1.detail.component';
import {Experiment} from '../common/experiment.model';
import {StateService} from '../common/state.service';
import {ExperimentsService} from '../common/experiments.service';

@Component({
  selector: 'inne1',
  templateUrl: 'app/inne1/inne1.component.html',
  directives: [Inne1DetailComponent]
})
export class Inne1Component implements OnInit {
  title: string = 'Inne info';
  body: string = 'Lista ';
  message: string;
  experiments: Experiment[];

  constructor(
    private _stateService: StateService,
    private _experimentsService: ExperimentsService) {}

  ngOnInit() {
    this.experiments = this._experimentsService.getExperiments();
    this.message = this._stateService.getMessage();
  }

  updateMessage(m: string): void {
    this._stateService.setMessage(m);
  }
}
