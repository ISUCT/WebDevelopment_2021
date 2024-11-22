import { Migration } from '@mikro-orm/migrations';

export class Migration20241116145833 extends Migration {

  override async up(): Promise<void> {
    this.addSql(`alter table "user" add column "password" varchar(255) not null default 'changeme';`);
  }

  override async down(): Promise<void> {
    this.addSql(`alter table "user" drop column "password";`);
  }

}
