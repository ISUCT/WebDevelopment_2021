import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CatsController } from './cats.controller';
import { CatsService } from './cats.service';
import { Cat } from './models/cats.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Cat])],
  providers: [CatsService],
  controllers: [CatsController]
})
export class CatsModule {}
