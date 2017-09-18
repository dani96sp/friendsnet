import { Person } from './person.model';


export class Opinions {
    requester: Person;
    requested: Person;
    accepted: boolean;
}
