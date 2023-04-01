import { Book } from './models/book';
import { EntityRepository } from '@mikro-orm/core';
import { InjectRepository } from '@mikro-orm/nestjs';
import { Injectable } from '@nestjs/common';

@Injectable()
export class BooksService {
  constructor(
    @InjectRepository(Book)
    private readonly booksRepository: EntityRepository<Book>,
  ) {}

  async getAll(): Promise<Book[]> {
    return this.booksRepository.findAll();
  }

  async getById(id: number): Promise<Book> {
    return this.booksRepository.findOne({
      id,
    });
  }

  async getByName(name: string): Promise<Book> {
    return this.booksRepository.findOne({
      author: name,
    });
  }
}
