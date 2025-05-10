import { Injectable } from '@nestjs/common';
import { CreateContactInfoInput } from './dto/create-contact-info.input';
import { UpdateContactInfoInput } from './dto/update-contact-info.input';
import { ContactInfo } from './entities/contact-info.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class ContactInfoService {
  constructor(
    @InjectRepository(ContactInfo)
    private readonly contactInfoRepository: Repository<ContactInfo>,
  ) {}
  async create(
    createContactInfoInput: CreateContactInfoInput,
  ): Promise<ContactInfo> {
    return this.contactInfoRepository.save(createContactInfoInput);
  }

  findOne(id: number) {
    return `This action returns a #${id} contactInfo`;
  }
}
