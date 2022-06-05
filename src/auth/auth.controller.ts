import { Body, Controller, Post, UseInterceptors } from '@nestjs/common';
import { OutputInterceptor } from '../common/interceptors/output.interceptor';
import { AuthService } from './auth.service';
import {
  UserRegisterInputDto,
  UserRegisterOutputDto,
} from './dtos/user.register.dto';

@Controller('auth')
@UseInterceptors(OutputInterceptor)
export class AuthController {
  constructor(private readonly authService: AuthService) {}
  @Post()
  async register(
    @Body() dto: UserRegisterInputDto,
  ): Promise<UserRegisterOutputDto> {
    return this.authService.register(dto);
  }
}
