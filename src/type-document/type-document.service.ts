import { Injectable } from '@nestjs/common';
import { CreateTypeDocumentInput } from './dto/create-type-document.input';
import { UpdateTypeDocumentInput } from './dto/update-type-document.input';

@Injectable()
export class TypeDocumentService {
  create(createTypeDocumentInput: CreateTypeDocumentInput) {
    return 'This action adds a new typeDocument';
  }

  findAll() {
    return `This action returns all typeDocument`;
  }

  findOne(id: number) {
    return `This action returns a #${id} typeDocument`;
  }

  update(id: number, updateTypeDocumentInput: UpdateTypeDocumentInput) {
    return `This action updates a #${id} typeDocument`;
  }

  remove(id: number) {
    return `This action removes a #${id} typeDocument`;
  }
}
