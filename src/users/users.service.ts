import {
  Injectable,
  ConflictException,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { User } from './entities/user.entity';
import { RegisterUserInput } from './dto/register-user.input';
import { UserDocumentService } from 'src/user-document/user-document.service';
import { TypeDocumentService } from 'src/type-document/type-document.service';
import { CreateUserInput } from './dto/create-user.input';
import { ContactInfoService } from 'src/contact-info/contact-info.service';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    private readonly userDocumentService: UserDocumentService,
    private readonly typeDocumentService: TypeDocumentService,
    private readonly contactInfoService: ContactInfoService,
  ) {}

  async findAll(): Promise<User[]> {
    return this.userRepository.find({
      relations: ['documents', 'contactInfo'],
    });
  }

  async findOne(id: number): Promise<User> {
    const user = await this.userRepository.findOne({
      where: { id },
      relations: ['documents', 'contactInfo'],
    });

    if (!user) {
      throw new NotFoundException('El usuario no existe');
    }

    return user;
  }

  async registerUser(registerInput: RegisterUserInput): Promise<User> {
    const { user, document, contactInfo } = registerInput;

    const userFound = await this.findUserByCredentials(
      user.username,
      user.email,
    );

    if (userFound) {
      throw new ConflictException('El usuario ya existe');
    }

    const documentFound =
      await this.userDocumentService.findOneByDocumentNumber(document.Document);

    if (documentFound) {
      throw new ConflictException('El documento ya existe');
    }

    const documentType = await this.typeDocumentService.findOne(
      document.TypeDocumentId,
    );

    if (!documentType) {
      throw new NotFoundException('Tipo de documento no encontrado');
    }

    const userEntity = await this.createUser(user);

    // Creación de entidades relacionadas
    await this.userDocumentService.create({
      ...document,
      UserId: userEntity.id,
    });

    await this.contactInfoService.create({
      ...contactInfo,
      UserId: userEntity.id,
    });

    return await this.findOne(userEntity.id);
  }

  async createUser(user: CreateUserInput): Promise<User> {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(user.password, salt);

    const userEntity = this.userRepository.create({
      ...user,
      password: hashedPassword,
    });

    return this.userRepository.save(userEntity);
  }

  private async findUserByCredentials(
    username: string,
    email: string,
  ): Promise<User | null> {
    return this.userRepository.findOne({
      where: [{ username }, { email }],
    });
  }
}
