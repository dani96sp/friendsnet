import { Post } from './post.model';
import { Person } from './person.model';


export class Opinions {
    id: number;
    post: Post;
    person: Person;
    opinion: number;
}
