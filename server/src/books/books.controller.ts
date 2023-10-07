import {
  BadRequestException,
  Body,
  Controller,
  Get,
  NotFoundException,
  Param,
  ParseIntPipe,
  Post,
  Query,
} from '@nestjs/common';
import { title } from 'process';
import { BooksService } from './books.service';

import { Book } from './models/book';

const books: Book[] = [
  {
    id: 1,
    author: 'L. Tolstoy',
    title: 'War and peace',
  },
  {
    id: 2,
    author: 'L. Tolstoy',
    title: 'Anna Karenina',
  },
  {
    id: 3,
    author: 'A. Weir',
    title: 'Marsianin',
  },
];

@Controller('books')
export class BooksController {
  constructor(private readonly booksService: BooksService) {}

  @Get()
  async findAll(@Query('author') author?: string) {
    if (!author) {
      return this.booksService.getAll();
    }
    const book = await this.booksService.getByName(author)
    if (book) {
      return book;
    }
    throw new NotFoundException();
  }

  @Get(':id')
  async findById(@Param('id', new ParseIntPipe()) id): Promise<Book> {
    const book = await this.booksService.getById(id);
    if (book) {
      return book;
    }
    throw new NotFoundException();
  }

  @Post()
  Create(@Body() model: Book): Book {
    // console.log(model);
    const bookExists = books.some(item => item.title === model.title);
    if (bookExists) {
      throw new BadRequestException(`book with id=${model.id} already exist`);
    }
    books.push({
      ...model,
      id: books.length,
      author: '',
    });
    return books[books.length - 1];
  }
}
