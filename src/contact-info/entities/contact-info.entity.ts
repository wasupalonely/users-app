import { ObjectType, Field, ID, Int } from '@nestjs/graphql';
import { Country } from './../../country/entities/country.entity';
import { User } from './../../users/entities/user.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
  ManyToOne,
  JoinColumn,
} from 'typeorm';

@ObjectType()
@Entity({ name: 'ContactInfo_TB' })
export class ContactInfo {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id: number;

  @Field(() => Int)
  @Column()
  UserId: number;

  @Field(() => Int)
  @Column()
  CountryID: number;

  @Field(() => String)
  @Column({ length: 50 })
  City: string;

  @Field(() => String)
  @Column({ length: 60 })
  Address: string;

  @Field(() => String, { nullable: true })
  @Column({ length: 20, nullable: true })
  Phone: string;

  @Field(() => String)
  @Column({ length: 20 })
  CellPhone: string;

  @Field(() => String)
  @Column({ length: 100 })
  EmergencyName: string;

  @Field(() => String)
  @Column({ length: 20 })
  EmergencyPhone: string;

  // Relaciones
  @Field(() => User)
  @OneToOne(() => User, (user) => user.contactInfo, { eager: true })
  @JoinColumn({ name: 'UserId' })
  user: User;

  @Field(() => Country)
  @ManyToOne(() => Country, (country) => country.contactInfos, { eager: true })
  @JoinColumn({ name: 'CountryID' })
  country: Country;
}
