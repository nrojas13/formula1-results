import { DriverStandings} from './driver-standings';
import { ConstructorStandings} from './constructor-standings';

export class StandingsLists {
    season: string;
    round: string;
    DriverStandings ?: DriverStandings[];
    ConstructorStandings ?: ConstructorStandings[];
}