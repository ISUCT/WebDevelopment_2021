import { Entity, PrimaryKey, Property, types } from "@mikro-orm/core"

@Entity()
export class Book {
    @PrimaryKey()
    id?: number;
    @Property()
    author: string;
    @Property()
    title: string;
}