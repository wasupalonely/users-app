import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { UserDocumentService } from './user-document.service';
import { UserDocument } from './entities/user-document.entity';
import { CreateUserDocumentInput } from './dto/create-user-document.input';
import { UpdateUserDocumentInput } from './dto/update-user-document.input';

@Resolver(() => UserDocument)
export class UserDocumentResolver {
  constructor(private readonly userDocumentService: UserDocumentService) {}

  @Mutation(() => UserDocument)
  createUserDocument(@Args('createUserDocumentInput') createUserDocumentInput: CreateUserDocumentInput) {
    return this.userDocumentService.create(createUserDocumentInput);
  }

  @Query(() => [UserDocument], { name: 'userDocument' })
  findAll() {
    return this.userDocumentService.findAll();
  }

  @Query(() => UserDocument, { name: 'userDocument' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.userDocumentService.findOne(id);
  }

  @Mutation(() => UserDocument)
  updateUserDocument(@Args('updateUserDocumentInput') updateUserDocumentInput: UpdateUserDocumentInput) {
    return this.userDocumentService.update(updateUserDocumentInput.id, updateUserDocumentInput);
  }

  @Mutation(() => UserDocument)
  removeUserDocument(@Args('id', { type: () => Int }) id: number) {
    return this.userDocumentService.remove(id);
  }
}
