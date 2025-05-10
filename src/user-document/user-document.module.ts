import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserDocumentService } from './user-document.service';
import { UserDocumentResolver } from './user-document.resolver';
import { UserDocument } from './entities/user-document.entity';
import { User } from 'src/users/entities/user.entity';
import { TypeDocumentModule } from 'src/type-document/type-document.module';

@Module({
  imports: [TypeOrmModule.forFeature([UserDocument, User]), TypeDocumentModule],
  providers: [UserDocumentResolver, UserDocumentService],
  exports: [UserDocumentService],
})
export class UserDocumentModule {}
