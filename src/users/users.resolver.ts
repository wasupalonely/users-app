import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { UsersService } from './users.service';
import { User } from './entities/user.entity';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { RegisterUserInput } from './dto/register-user.input';
import { VerifyEmailResponse } from './dto/verify-email.response';

@Resolver(() => User)
export class UsersResolver {
  constructor(private readonly usersService: UsersService) {}

  @Query(() => [User], { name: 'users' })
  findAll() {
    return this.usersService.findAll();
  }

  @Query(() => User, { name: 'user' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.usersService.findOne(id);
  }

  @Mutation(() => User, {
    name: 'registerUser',
  })
  createUser(@Args('registerUserInput') registerUserInput: RegisterUserInput) {
    return this.usersService.registerUser(registerUserInput);
  }

  @Query(() => Boolean, { name: 'checkUsernameExists' })
  checkUserExists(@Args('username') username: string) {
    return this.usersService.checkUserExists(username);
  }

  @Query(() => Boolean, { name: 'checkEmailExists' })
  checkEmailExists(@Args('email') email: string) {
    return this.usersService.checkEmailExists(email);
  }

  @Mutation(() => VerifyEmailResponse, { name: 'verifyEmail' })
  verifyEmail(
    @Args('token') token: string,
    @Args('userId') userId: number,
  ): Promise<{ success: boolean; message: string }> {
    return this.usersService.verifyEmail(token, userId);
  }
}
