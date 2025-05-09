import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeDocumentService } from './type-document.service';
import { TypeDocumentResolver } from './type-document.resolver';
import { TypeDocument } from './entities/type-document.entity';

@Module({
  imports: [TypeOrmModule.forFeature([TypeDocument])],
  providers: [TypeDocumentResolver, TypeDocumentService],
})
export class TypeDocumentModule {}
