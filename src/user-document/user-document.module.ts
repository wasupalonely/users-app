import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserDocumentService } from './user-document.service';
import { UserDocumentResolver } from './user-document.resolver';
import { UserDocument } from './entities/user-document.entity';

@Module({
  imports: [TypeOrmModule.forFeature([UserDocument])],
  providers: [UserDocumentResolver, UserDocumentService],
})
export class UserDocumentModule {}
