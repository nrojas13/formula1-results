import { DriverModel } from './driver';
import { TeamModel } from './team';
import { TimeModel } from './time';
import { FastestLapModel } from './fastest-lap';

export class ResultModel {
    number: string;
    position: string;
    positionText: string;
    points: string;
    Driver: DriverModel;
    Constructor: TeamModel;
    grid: string;
    laps: string;
    status: string;
    Time: TimeModel;
    FastestLap: FastestLapModel;
}