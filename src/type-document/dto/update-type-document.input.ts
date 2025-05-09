import { CreateTypeDocumentInput } from './create-type-document.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateTypeDocumentInput extends PartialType(CreateTypeDocumentInput) {
  @Field(() => Int)
  id: number;
}
