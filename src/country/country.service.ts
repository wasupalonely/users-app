import { Injectable } from '@nestjs/common';
import { CreateCountryInput } from './dto/create-country.input';
import { UpdateCountryInput } from './dto/update-country.input';
import { Country } from './entities/country.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class CountryService {
  constructor(
    @InjectRepository(Country)
    private readonly countryRepository: Repository<Country>,
  ) {}
  async findAll(): Promise<Country[]> {
    return await this.countryRepository.find();
  }

  async findOne(id: number): Promise<Country> {
    const country = await this.countryRepository.findOneBy({ id });

    if (!country) {
      throw new Error('El pais no existe');
    }

    return country;
  }
}
