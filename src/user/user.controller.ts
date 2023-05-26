import { UserService } from './user.service';
import {Param, Body, Patch,  UsePipes, ValidationPipe, Put, Controller, HttpCode, Get } from '@nestjs/common'
import { Auth } from 'src/auth/decorators/auth.decorators';
import { CurrentUser } from 'src/auth/decorators/user.decorator';
import { UserDto } from './user.dto';


@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}


  //get profile

  //toggleFavorites

  //update profile


	@Get('profile')
  @Auth()
	async getProfile(@CurrentUser('id') id: number) {
		return this.userService.byId(id)
	}

	@UsePipes(new ValidationPipe())
	@HttpCode(200)
	@Auth()
	@Put('profile')
	async getNewTokens(@CurrentUser('id') id: number, @Body() dto: UserDto) {
		return this.userService.updateProfile(id, dto)
	}





	@HttpCode(200)
  @Auth()
	@Patch('profile/favorites/:productId')
	async toggleFavorite(@CurrentUser('id') id: number, @Param('productId') productId: string, ) {
		return this.userService.toggleFavorite(id, +productId)
	}

	



}
