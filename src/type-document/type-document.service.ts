import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTypeDocumentInput } from './dto/create-type-document.input';
import { UpdateTypeDocumentInput } from './dto/update-type-document.input';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeDocument } from './entities/type-document.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TypeDocumentService {
  constructor(
    @InjectRepository(TypeDocument)
    private readonly typeDocumentRepository: Repository<TypeDocument>,
  ) {}

  async findOne(id: number): Promise<TypeDocument | null> {
    const typeDocument = await this.typeDocumentRepository.findOneBy({ id });

    return typeDocument;
  }
}
