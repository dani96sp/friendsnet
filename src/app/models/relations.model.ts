import { Person } from './person.model';


export class Relations {
    id: number;
    requester: Person;
    requested: Person;
    accepted: boolean;
}
