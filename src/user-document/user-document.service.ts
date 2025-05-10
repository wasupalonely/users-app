import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDocumentInput } from './dto/create-user-document.input';
import { UpdateUserDocumentInput } from './dto/update-user-document.input';
import { InjectRepository } from '@nestjs/typeorm';
import { UserDocument } from './entities/user-document.entity';
import { Repository } from 'typeorm';
import { User } from 'src/users/entities/user.entity';
import { TypeDocumentService } from 'src/type-document/type-document.service';

@Injectable()
export class UserDocumentService {
  constructor(
    @InjectRepository(UserDocument)
    private readonly userDocumentRepository: Repository<UserDocument>,
    @InjectRepository(User) private readonly userRepository: Repository<User>,
    private readonly typeDocumentService: TypeDocumentService,
  ) {}

  async findById(id: number): Promise<UserDocument> {
    const userDocument = await this.userDocumentRepository.findOneBy({ id });

    if (!userDocument) {
      throw new NotFoundException('El documento no existe');
    }

    return userDocument;
  }

  async create(
    createUserDocumentInput: CreateUserDocumentInput,
  ): Promise<UserDocument> {
    const user = await this.userRepository.findOneBy({
      id: createUserDocumentInput.UserId,
    });

    if (!user) {
      throw new NotFoundException('El usuario no existe');
    }

    const typeDocument = await this.typeDocumentService.findOne(
      createUserDocumentInput.TypeDocumentId,
    );

    if (!typeDocument) {
      throw new NotFoundException('El tipo de documento no existe');
    }

    const userDocument = await this.userDocumentRepository.save({
      ...createUserDocumentInput,
      DateExpedition: new Date(createUserDocumentInput.DateExpedition),
    });

    return await this.findById(userDocument.id);
  }
  async findOneByDocumentNumber(
    documentNumber: string,
  ): Promise<UserDocument | null> {
    const userDocument = await this.userDocumentRepository.findOne({
      where: { Document: documentNumber },
    });

    return userDocument;
  }
}
