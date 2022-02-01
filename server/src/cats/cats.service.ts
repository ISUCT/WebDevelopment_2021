import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult } from 'typeorm';
import { Repository } from 'typeorm/repository/Repository';
import { CatDto } from './dto/cat-dto';
import { Cat } from './models/cats.entity';

@Injectable()
export class CatsService {
  constructor(
    @InjectRepository(Cat)
    private catsRepository: Repository<Cat>,
  ) {}

  findAll(): Promise<Cat[]> {
    return this.catsRepository.find();
  }

  findOne(id: number): Promise<Cat> {
    return this.catsRepository.findOne(id);
  }

  async remove(id: number): Promise<DeleteResult> {
    return await this.catsRepository.delete(id);
  }

  async addCat(cat: CatDto): Promise<Cat> {
    return this.catsRepository.save(cat);
  }

  async update(id: number, cat: CatDto): Promise<Cat | null> {
    const dbCat = await this.catsRepository.findOne(id);
    if (dbCat){
      dbCat.age = cat.age;
      dbCat.name = cat.name;
      await this.catsRepository.save(dbCat);
      return dbCat;
    }
    return null; 
  }
}