import { CreateUserDocumentInput } from './create-user-document.input';
import { InputType, Field, PartialType, ID } from '@nestjs/graphql';

@InputType()
export class UpdateUserDocumentInput extends PartialType(
  CreateUserDocumentInput,
) {
  @Field(() => ID)
  id: number;
}
