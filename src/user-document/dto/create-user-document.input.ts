import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateUserDocumentInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
