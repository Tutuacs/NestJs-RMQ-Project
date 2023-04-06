import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateProductDto, UpdateProductDto } from './validation';

@Injectable()
export class ProductService {
  constructor(private readonly prisma: PrismaService) {}

  async all() {
    return this.prisma.testTable.findMany();
  }

  async create(product: CreateProductDto) {
    return this.prisma.testTable.create({
      data: {
        image: product.image,
        title: product.title,
        name: product.name,
      },
    });
  }

  async uniq(id: number) {
    const product = this.prisma.testTable.findUnique({
      where: {
        id,
      },
    });

    return product;
  }

  async update(product: UpdateProductDto) {
    return this.prisma.testTable.update({
      data: product,
      where: {
        id: product.id,
      },
    });
  }

  async delete(id: number) {
    return this.prisma.testTable.delete({
      where: {
        id,
      },
    });
  }
}
