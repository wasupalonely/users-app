import { InputType, Field } from '@nestjs/graphql';
import { ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { CreateUserInput } from './create-user.input';
import { CreateUserDocumentInput } from 'src/user-document/dto/create-user-document.input';
import { CreateContactInfoInput } from 'src/contact-info/dto/create-contact-info.input';

@InputType()
export class RegisterUserInput {
  @Field(() => CreateUserInput)
  @ValidateNested()
  @Type(() => CreateUserInput)
  user: CreateUserInput;

  @Field(() => CreateUserDocumentInput)
  @ValidateNested()
  @Type(() => CreateUserDocumentInput)
  document: CreateUserDocumentInput;

  @Field(() => CreateContactInfoInput)
  @ValidateNested()
  @Type(() => CreateContactInfoInput)
  contactInfo: CreateContactInfoInput;
}
