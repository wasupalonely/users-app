import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { TypeDocumentService } from './type-document.service';
import { TypeDocument } from './entities/type-document.entity';
import { CreateTypeDocumentInput } from './dto/create-type-document.input';
import { UpdateTypeDocumentInput } from './dto/update-type-document.input';

@Resolver(() => TypeDocument)
export class TypeDocumentResolver {
  constructor(private readonly typeDocumentService: TypeDocumentService) {}

  @Mutation(() => TypeDocument)
  createTypeDocument(@Args('createTypeDocumentInput') createTypeDocumentInput: CreateTypeDocumentInput) {
    return this.typeDocumentService.create(createTypeDocumentInput);
  }

  @Query(() => [TypeDocument], { name: 'typeDocument' })
  findAll() {
    return this.typeDocumentService.findAll();
  }

  @Query(() => TypeDocument, { name: 'typeDocument' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.typeDocumentService.findOne(id);
  }

  @Mutation(() => TypeDocument)
  updateTypeDocument(@Args('updateTypeDocumentInput') updateTypeDocumentInput: UpdateTypeDocumentInput) {
    return this.typeDocumentService.update(updateTypeDocumentInput.id, updateTypeDocumentInput);
  }

  @Mutation(() => TypeDocument)
  removeTypeDocument(@Args('id', { type: () => Int }) id: number) {
    return this.typeDocumentService.remove(id);
  }
}
