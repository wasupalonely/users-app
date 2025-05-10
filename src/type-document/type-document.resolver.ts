import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { TypeDocumentService } from './type-document.service';
import { TypeDocument } from './entities/type-document.entity';
import { CreateTypeDocumentInput } from './dto/create-type-document.input';
import { UpdateTypeDocumentInput } from './dto/update-type-document.input';

@Resolver(() => TypeDocument)
export class TypeDocumentResolver {
  constructor(private readonly typeDocumentService: TypeDocumentService) {}

  @Query(() => TypeDocument, { name: 'typeDocument' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.typeDocumentService.findOne(id);
  }
}
