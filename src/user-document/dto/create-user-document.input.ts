import { InputType, Field, Int } from '@nestjs/graphql';
import { IsNotEmpty, MaxLength, IsDateString, IsOptional } from 'class-validator';

@InputType()
export class CreateUserDocumentInput {
  @Field()
  @IsNotEmpty({ message: 'El número de documento es requerido' })
  @MaxLength(20, {
    message: 'El número de documento no puede exceder 20 caracteres',
  })
  Document: string;

  @Field(() => Int)
  @IsNotEmpty({ message: 'El tipo de documento es requerido' })
  TypeDocumentId: number;

  @Field(() => Int, { nullable: true })
  @IsOptional()
  UserId?: number;

  @Field()
  @IsNotEmpty({ message: 'El lugar de expedición es requerido' })
  @MaxLength(60, {
    message: 'El lugar de expedición no puede exceder 60 caracteres',
  })
  PlaceExpedition: string;

  @Field()
  @IsNotEmpty({ message: 'La fecha de expedición es requerida' })
  @IsDateString({}, { message: 'Formato de fecha inválido' })
  DateExpedition: string;
}
