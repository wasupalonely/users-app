import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { ContactInfoService } from './contact-info.service';
import { ContactInfo } from './entities/contact-info.entity';
import { CreateContactInfoInput } from './dto/create-contact-info.input';

@Resolver(() => ContactInfo)
export class ContactInfoResolver {
  constructor(private readonly contactInfoService: ContactInfoService) {}

  @Mutation(() => ContactInfo)
  createContactInfo(@Args('createContactInfoInput') createContactInfoInput: CreateContactInfoInput) {
    return this.contactInfoService.create(createContactInfoInput);
  }
}
