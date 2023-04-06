import { Inject, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateProductDto, UpdateProductDto } from './validation';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class ProductService {
  constructor(
    private readonly prisma: PrismaService,
    @Inject('PRODUCT_SERVICE') private readonly client: ClientProxy,
  ) {}

  async create(product: CreateProductDto) {
    await this.prisma.testTable.create({
      data: {
        image: product.image,
        title: product.title,
        name: product.name,
      },
    });
  }

  async all() {
    return this.prisma.testTable.findMany();
  }

  async uniq(id: number) {
    const product = this.prisma.testTable.findUnique({
      where: {
        id,
      },
    });

    return product;
  }

  async update(id: number, product: UpdateProductDto) {
    await this.prisma.testTable.update({
      data: product,
      where: {
        id,
      },
    });
    product.id = id;
    return product;
  }

  async delete(id: number) {
    return this.prisma.testTable.delete({
      where: {
        id,
      },
    });
  }
}
