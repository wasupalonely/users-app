import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ContactInfoService } from './contact-info.service';
import { ContactInfoResolver } from './contact-info.resolver';
import { ContactInfo } from './entities/contact-info.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ContactInfo])],
  providers: [ContactInfoResolver, ContactInfoService],
})
export class ContactInfoModule {}
