// src/users/entities/country.entity.ts
import { ObjectType, Field, ID } from '@nestjs/graphql';
import { ContactInfo } from 'src/contact-info/entities/contact-info.entity';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';

@ObjectType()
@Entity({ name: 'Country_TB' })
export class Country {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id: number;

  @Field(() => String)
  @Column({ length: 4 })
  CountryCode: string;

  @Field(() => String)
  @Column({ length: 100 })
  CountryName: string;

  @Field(() => [ContactInfo], { nullable: true })
  @OneToMany(() => ContactInfo, (contactInfo) => contactInfo.country)
  contactInfos: ContactInfo[];
}
