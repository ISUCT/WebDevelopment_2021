import { Entity, PrimaryKey, Property } from "@mikro-orm/core";
import { v4 } from 'uuid';

@Entity()
export class User {
    @PrimaryKey({ type: 'uuid' })
    id = v4();

    @Property()
    username: string;

    @Property()
    fullname: string;

    @Property({unique: true})
    email!: string;
}
