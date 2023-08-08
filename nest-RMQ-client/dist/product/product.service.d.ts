import { PrismaService } from 'src/prisma/prisma.service';
import { CreateProductDto, UpdateProductDto } from './validation';
import { ClientProxy } from '@nestjs/microservices';
export declare class ProductService {
    private readonly prisma;
    private readonly client;
    constructor(prisma: PrismaService, client: ClientProxy);
    create(product: CreateProductDto): Promise<void>;
    all(): Promise<import(".prisma/client").testTable[]>;
    uniq(id: number): Promise<import(".prisma/client").testTable>;
    update(id: number, product: UpdateProductDto): Promise<UpdateProductDto>;
    delete(id: number): Promise<import(".prisma/client").testTable>;
}
