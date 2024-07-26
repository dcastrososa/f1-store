import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@Controller({
  path: 'products',
})
@ApiTags('Products')
export class ProductsController {
  @Get('')
  findAll() {
    return [{ id: 1, name: 'Mercedes T-Shirt' }];
  }
}
