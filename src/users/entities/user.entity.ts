import { ObjectType, Field, ID } from '@nestjs/graphql';
import { ContactInfo } from './../../contact-info/entities/contact-info.entity';
import { UserDocument } from './../../user-document/entities/user-document.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@ObjectType()
@Entity({ name: 'AppUser_TB' })
export class User {
  @Field(() => ID)
  @PrimaryGeneratedColumn({ type: 'int' })
  id: number;

  @Field(() => String)
  @Column({ length: 20 })
  Name: string;

  @Field(() => String)
  @Column({ length: 20 })
  LastName: string;

  @Field(() => Boolean)
  @Column({ default: false })
  IsMilitar: boolean;

  @Field(() => Date)
  @CreateDateColumn()
  TimeCreate: Date;

  @Field(() => Boolean)
  @Column({ default: false })
  isTemporal: boolean;

  @Field(() => String)
  @Column({ unique: true })
  username: string;

  @Column()
  password: string;

  @Field(() => String)
  @Column({ unique: true })
  email: string;

  @Field(() => Boolean)
  @Column({ default: false })
  emailVerified: boolean;

  @Field(() => String, { nullable: true })
  @Column('varchar', { length: 64, nullable: true })
  verificationToken?: string | null;

  @Field(() => [UserDocument], { nullable: true })
  @OneToMany(() => UserDocument, (userDocument) => userDocument.user)
  documents: UserDocument[];

  @Field(() => ContactInfo, { nullable: true })
  @OneToOne(() => ContactInfo, (contactInfo) => contactInfo.user)
  contactInfo: ContactInfo;
}
