import { InputType, Field } from '@nestjs/graphql';
import {
  IsEmail,
  IsNotEmpty,
  MinLength,
  MaxLength,
  Matches,
} from 'class-validator';

@InputType()
export class CreateUserInput {
  @Field()
  @IsNotEmpty({ message: 'El nombre es requerido' })
  @MaxLength(20, { message: 'El nombre no puede exceder 20 caracteres' })
  Name: string;

  @Field()
  @IsNotEmpty({ message: 'El apellido es requerido' })
  @MaxLength(20, { message: 'El apellido no puede exceder 20 caracteres' })
  LastName: string;

  @Field()
  @IsNotEmpty({ message: 'El correo electrónico es requerido' })
  @IsEmail({}, { message: 'Formato de correo electrónico inválido' })
  email: string;

  @Field()
  @IsNotEmpty({ message: 'El nombre de usuario es requerido' })
  @Matches(/^[a-zA-Z0-9_]+$/, {
    message:
      'El nombre de usuario solo puede contener letras, números y guiones bajos',
  })
  username: string;

  @Field()
  @IsNotEmpty({ message: 'La contraseña es requerida' })
  @MinLength(8, { message: 'La contraseña debe tener al menos 8 caracteres' })
  @Matches(/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/, {
    message:
      'La contraseña debe contener al menos una letra minúscula, una mayúscula y un número',
  })
  password: string;

  @Field({ defaultValue: false, nullable: true })
  IsMilitar: boolean;

  @Field({ defaultValue: false, nullable: true })
  isTemporal: boolean;
}
