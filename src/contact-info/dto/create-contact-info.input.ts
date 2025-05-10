import { InputType, Field, Int } from '@nestjs/graphql';
import { IsNotEmpty, MaxLength, Matches, IsOptional } from 'class-validator';

@InputType()
export class CreateContactInfoInput {
  @Field(() => Int)
  @IsNotEmpty({ message: 'El país es requerido' })
  CountryID: number;

  @Field(() => Int, { nullable: true })
  @IsOptional()
  UserId?: number;

  @Field()
  @IsNotEmpty({ message: 'La ciudad es requerida' })
  @MaxLength(50, { message: 'La ciudad no puede exceder 50 caracteres' })
  City: string;

  @Field()
  @IsNotEmpty({ message: 'La dirección es requerida' })
  @MaxLength(60, { message: 'La dirección no puede exceder 60 caracteres' })
  @Matches(/^.*#.*$/, { message: 'La dirección debe incluir el símbolo "#"' })
  Address: string;

  @Field({ nullable: true })
  @MaxLength(20, { message: 'El teléfono no puede exceder 20 caracteres' })
  Phone?: string;

  @Field()
  @IsNotEmpty({ message: 'El celular es requerido' })
  @MaxLength(20, { message: 'El celular no puede exceder 20 caracteres' })
  @Matches(/^\d+$/, { message: 'El celular debe contener solo dígitos' })
  CellPhone: string;

  @Field()
  @IsNotEmpty({ message: 'El nombre de contacto de emergencia es requerido' })
  @MaxLength(100, {
    message: 'El nombre de emergencia no puede exceder 100 caracteres',
  })
  EmergencyName: string;

  @Field()
  @IsNotEmpty({ message: 'El teléfono de emergencia es requerido' })
  @MaxLength(20, {
    message: 'El teléfono de emergencia no puede exceder 20 caracteres',
  })
  @Matches(/^\d+$/, { message: 'El teléfono debe contener solo dígitos' })
  EmergencyPhone: string;
}
