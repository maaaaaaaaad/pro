import {
  Body,
  Controller,
  Get,
  Post,
  Query,
  UseInterceptors,
} from '@nestjs/common';
import { OutputInterceptor } from '../common/interceptors/output.interceptor';
import { AuthService } from './auth.service';
import {
  UserRegisterInputDto,
  UserRegisterOutputDto,
} from './dtos/user.register.dto';
import { UserListInputDto, UserListOutputDto } from './dtos/user.list.dto';

@Controller('auth')
@UseInterceptors(OutputInterceptor)
export class AuthController {
  constructor(private readonly authService: AuthService) {}
  @Post()
  async register(
    @Body() userRegisterInputDto: UserRegisterInputDto,
  ): Promise<UserRegisterOutputDto> {
    return await this.authService.register(userRegisterInputDto);
  }

  @Get('all')
  async all(
    @Query() userListInputDto: UserListInputDto,
  ): Promise<UserListOutputDto> {
    return await this.authService.list(userListInputDto);
  }
}
