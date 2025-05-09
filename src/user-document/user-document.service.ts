import { Injectable } from '@nestjs/common';
import { CreateUserDocumentInput } from './dto/create-user-document.input';
import { UpdateUserDocumentInput } from './dto/update-user-document.input';

@Injectable()
export class UserDocumentService {
  create(createUserDocumentInput: CreateUserDocumentInput) {
    return 'This action adds a new userDocument';
  }

  findAll() {
    return `This action returns all userDocument`;
  }

  findOne(id: number) {
    return `This action returns a #${id} userDocument`;
  }

  update(id: number, updateUserDocumentInput: UpdateUserDocumentInput) {
    return `This action updates a #${id} userDocument`;
  }

  remove(id: number) {
    return `This action removes a #${id} userDocument`;
  }
}
