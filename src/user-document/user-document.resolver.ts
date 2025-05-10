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
}
