import { CreateUserDocumentInput } from './create-user-document.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateUserDocumentInput extends PartialType(CreateUserDocumentInput) {
  @Field(() => Int)
  id: number;
}
