import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('new/:id')
  newPath(@Param('id') id: string): string {
    return `Is param: ${id}`;
  }

  @Get('categories/:id/products/:productId')
  newCategory(
    @Param('productId') productId: string,
    @Param('id') id: string,
  ): string {
    return `Id the category: ${id} and product is: ${productId}`;
  }
}
