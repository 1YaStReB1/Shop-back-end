import { Body, Controller, Delete, Get, HttpCode, Param, Post, Put, UsePipes, ValidationPipe } from '@nestjs/common';
import { ReviewService } from './review.service';
import { Auth } from 'src/auth/decorators/auth.decorators';
import { ReviewDto } from './review.dto';
import { CurrentUser } from 'src/auth/decorators/user.decorator';

@Controller('reviews')
export class ReviewController {
  constructor(private readonly reviewService: ReviewService) {}


  @UsePipes(new ValidationPipe())
	@Get()
	async getAll() {
		return this.reviewService.getAll()
	}

  @UsePipes(new ValidationPipe())
  @HttpCode(200)
  @Post('leave/:productId')
  @Auth()
	async leaveReview(@CurrentUser('id') id: number, @Body() dto : ReviewDto, @Param('productId') productId: string) {
		return this.reviewService.create(id,dto, +productId)
	}

	
}
