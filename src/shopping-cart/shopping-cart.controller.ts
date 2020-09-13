import { Post, Controller, UseGuards, UsePipes } from '@nestjs/common';
import { ValidationPipe } from '../common/validation.pipe';
import { UserGuard } from '../common/admin.guard';


@Controller('shopping-cart')
export class ShoppingCartController {
  @Post()
  @UseGuards(new UserGuard())
  @UsePipes(new ValidationPipe())
  async addItem() {
    return 'added to cart';
  }
}

