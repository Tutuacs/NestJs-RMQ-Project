import { Controller, Get } from '@nestjs/common';
import { EventPattern } from '@nestjs/microservices';
import { CreateProductDto, UpdateProductDto } from './validation';
import { ProductService } from './product.service';

@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get('all')
  async all() {
    return this.productService.all();
  }

  @EventPattern('Product created')
  async created(product: CreateProductDto) {
    return this.productService.create(product);
  }

  @EventPattern('Product updated')
  async updated(product: UpdateProductDto) {
    return this.productService.update(product);
  }

  @EventPattern('Product deleted')
  async deleted(id: number) {
    return this.productService.delete(id);
  }
}
