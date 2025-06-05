import {
  Controller,
  Get,
  Put,
  Delete,
  Body,
  UseGuards,
  Req,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('users')
@UseGuards(JwtAuthGuard)
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get('profile')
  getProfile(@Req() req) {
    return this.usersService.findById(req.user.userId);
  }

  @Put('profile')
  updateProfile(@Req() req, @Body() body: any) {
    return this.usersService.update(req.user.userId, body);
  }

  @Delete('profile')
  deleteProfile(@Req() req) {
    return this.usersService.delete(req.user.userId);
  }
}
