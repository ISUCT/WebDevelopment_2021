import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DemoController } from './demo/demo.controller';
// import { GraphQLModule } from '@nestjs/graphql';
import { CatsModule } from './cats/cats.module';
import { DogsModule } from './dogs/dogs.module';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { BooksModule } from './books/books.module';

@Module({
  imports: [
  //   GraphQLModule.forRoot({
  //   autoSchemaFile: 'schema.gql',
  // }),
  MikroOrmModule.forRoot({
    autoLoadEntities: true,
    clientUrl: 'postgresql://postgres:example@localhost:5432/webdev',
    type: 'postgresql',
    migrations: {
      tableName: 'mikro_orm_migrations', // migrations table name
      path: process.cwd() + './migrations', // path to folder with migration files
      glob: '!(*.d).{js,ts}', // how to match migration files (all .js and .ts files, but not .d.ts)
      transactional: true, // run each migration inside transaction
      disableForeignKeys: true, // try to disable foreign_key_checks (or equivalent)
      allOrNothing: true, // run all migrations in current batch in master transaction
      emit: 'ts', // migration generation mode
    },
  }),
CatsModule, DogsModule, BooksModule],
  controllers: [AppController, DemoController],
  providers: [AppService],
})
export class AppModule {}
