import { Controller, Get } from '@nestjs/common';
import { StatisticService } from './statistic.service';
import { Auth } from 'src/auth/decorators/auth.decorators';
import { CurrentUser } from 'src/auth/decorators/user.decorator';

@Controller('statistics')
export class StatisticController {
  constructor(private readonly statisticService: StatisticService) {}


	@Get('main')
  @Auth()
	getMainStatistics(@CurrentUser('id') id: number) {
		return this.statisticService.getMain(id)
	}



}
