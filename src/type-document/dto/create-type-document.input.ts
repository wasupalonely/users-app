import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateTypeDocumentInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
