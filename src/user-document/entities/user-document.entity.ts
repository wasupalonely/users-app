import { ObjectType, Field, ID, Int } from '@nestjs/graphql';
import { TypeDocument } from 'src/type-document/entities/type-document.entity';
import { User } from 'src/users/entities/user.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';

@ObjectType()
@Entity({ name: 'UserDocument_TB' })
export class UserDocument {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id: number;

  @Field(() => Int)
  @Column()
  UserId: number;

  @Field(() => String)
  @Column({ length: 20 })
  Document: string;

  @Field(() => Int)
  @Column()
  TypeDocumentId: number;

  @Field(() => String)
  @Column({ length: 60 })
  PlaceExpedition: string;

  @Field(() => Date)
  @Column({ type: 'date' })
  DateExpedition: Date;

  @Field(() => User)
  @ManyToOne(() => User, (user) => user.documents)
  @JoinColumn({ name: 'UserId' })
  user: User;

  @Field(() => TypeDocument)
  @ManyToOne(() => TypeDocument, (typeDocument) => typeDocument.userDocuments)
  @JoinColumn({ name: 'TypeDocumentId' })
  typeDocument: TypeDocument;
}
