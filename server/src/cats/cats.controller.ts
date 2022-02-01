import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpException,
  HttpStatus,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { CatsService } from './cats.service';
import { CatDto } from './dto/cat-dto';

@Controller('cats')
export class CatsController {
  constructor(private catsService: CatsService) {}
  cats: CatDto[] = [
    {
      id: 1,
      age: 0,
      name: 'Barsik',
    },
    {
      id: 2,
      age: 2,
      name: 'Murzik',
    },
  ];

  @Get()
  async findAll() {
    return await this.catsService.findAll();
  }

  @Get(':id')
  async findOne(@Param() params) {
    const cat = await this.catsService.findOne(+params.id);
    if (cat) {
      return cat;
    }
    throw new HttpException('Not found', HttpStatus.NOT_FOUND);
  }

  @Post()
  async createCat(@Body() cat: CatDto) {
    return this.catsService.addCat(cat);
  }

  @Put(':id')
  async UpdateOne(@Param() params, @Body() cat: CatDto) {
    const dbCat = await this.catsService.update(+params.id, cat);
    if (dbCat) {
      return dbCat;
    }
    throw new HttpException('Not found', HttpStatus.NOT_FOUND);
  }

  @Delete(':id')
  @HttpCode(202)
  async delete(@Param() params) {
    const result = await this.catsService.remove(+params.id);
    if (result.affected === 0) {
      throw new HttpException('Not found', HttpStatus.NOT_FOUND);
    }
  }
}
