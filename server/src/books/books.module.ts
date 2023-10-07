import { MikroOrmModule } from '@mikro-orm/nestjs';
import { Module } from '@nestjs/common';
import { BooksController } from './books.controller';
import { BooksService } from './books.service';
import { Book } from './models/book';

@Module({
  imports: [MikroOrmModule.forFeature([Book])],
  controllers: [BooksController],
  providers:[BooksService],
})
export class BooksModule {}
