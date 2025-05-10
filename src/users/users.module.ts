import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersResolver } from './users.resolver';
import { User } from './entities/user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserDocumentModule } from 'src/user-document/user-document.module';
import { TypeDocumentModule } from 'src/type-document/type-document.module';
import { ContactInfoModule } from 'src/contact-info/contact-info.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([User]),
    UserDocumentModule,
    TypeDocumentModule,
    ContactInfoModule,
  ],
  providers: [UsersResolver, UsersService],
})
export class UsersModule {}
