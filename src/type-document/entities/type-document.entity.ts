import { ObjectType, Field, ID } from '@nestjs/graphql';
import { UserDocument } from 'src/user-document/entities/user-document.entity';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';

@ObjectType()
@Entity({ name: 'TypeDocument_TB' })
export class TypeDocument {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id: number;

  @Field(() => String)
  @Column({ length: 50 })
  NameTypeDocument: string;

  @Field(() => [UserDocument], { nullable: true })
  @OneToMany(() => UserDocument, (userDocument) => userDocument.typeDocument)
  userDocuments: UserDocument[];
}
