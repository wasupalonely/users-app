import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { TypeDocumentService } from './type-document.service';
import { TypeDocument } from './entities/type-document.entity';

@Resolver(() => TypeDocument)
export class TypeDocumentResolver {
  constructor(private readonly typeDocumentService: TypeDocumentService) {}

  @Query(() => [TypeDocument], { name: 'typeDocuments' })
  findAll() {
    return this.typeDocumentService.findAll();
  }

  @Query(() => TypeDocument, { name: 'typeDocument' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.typeDocumentService.findOne(id);
  }
}
