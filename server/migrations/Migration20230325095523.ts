import { Migration } from '@mikro-orm/migrations';

export class Migration20230325095523 extends Migration {

  async up(): Promise<void> {
    this.addSql('create table "book" ("id" serial primary key, "author" varchar(255) not null, "title" varchar(255) not null);');
  }

  async down(): Promise<void> {
    this.addSql('drop table if exists "book" cascade;');
  }

}
