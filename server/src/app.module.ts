import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DemoController } from './demo/demo.controller';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { PostgreSqlDriver } from '@mikro-orm/postgresql';
import { UsersModule } from './users/users.module';
import { User } from './users/entities/user.entity';

@Module({
  imports: [
    //   GraphQLModule.forRoot({
    //   autoSchemaFile: 'schema.gql',
    // }),
    MikroOrmModule.forRoot({
      entities: [User],
      // autoLoadEntities: true,
      clientUrl: 'postgresql://postgres:example@localhost:5432/webdev',
      driver: PostgreSqlDriver,
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
    UsersModule,
  ],
  controllers: [AppController, DemoController],
  providers: [AppService],
})
export class AppModule {}
