import {
  Body,
  Controller,
  Delete,
  Get,
  Inject,
  Param,
  ParseIntPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { ProductService } from './product.service';
import {
  CreateMailDto,
  CreateProductDto,
  UpdateProductDto,
} from './validation';
import { ClientProxy } from '@nestjs/microservices';

@Controller('product')
export class ProductController {

  constructor(
    private readonly productService: ProductService,
    @Inject('PRODUCT_SERVICE') private readonly client: ClientProxy,
  ) {}

  @Post('create')
  async create(@Body() product: CreateProductDto) {
    await this.productService.create(product);

    this.client.emit('Product created', product);

    return product;
  }

  @Get('all')
  async all() {
    // this.client.emit('hello','Hello from RabbitMQ')
    return this.productService.all();
  }

  @Get('uniq/:id')
  async uniq(@Param('id', ParseIntPipe) id: number) {
    return this.productService.uniq(id);
  }

  @Patch('update/:id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() product: UpdateProductDto,
  ) {
    const productAtt = await this.productService.update(id, product);

    this.client.emit(`Product updated`, productAtt);

    return productAtt;
  }

  @Delete('delete/:id')
  async delete(@Param('id', ParseIntPipe) id: number) {
    await this.productService.delete(id);

    this.client.emit(`Product deleted`, id);

    return id;
  }

  @Post('mail')
  async sendRmqMail(@Body() content: CreateMailDto) {
    return this.client.emit('sendEmail', content);
  }
  
}
