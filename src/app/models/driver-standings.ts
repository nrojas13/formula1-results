import { DriverModel } from './driver';
import { TeamModel} from './team';

export class DriverStandings {
    position: string;
    positionText: string;
    points: string;
    wins: string;
    Driver: DriverModel;
    Constructors: TeamModel[];
}