import { TimeModel } from './time';
import { ResultModel } from './result';
import { CircuitModel } from './circuit';

export class RaceModel {
    season: string;
    round: string;
    url: string;
    raceName: string;
    Circuit: CircuitModel;
    date: string;
    time: string;
    Results ?: ResultModel[];
}