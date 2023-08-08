import { PrismaService } from 'src/prisma/prisma.service';
import { CreateProductDto, UpdateProductDto } from './validation';
export declare class ProductService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    all(): Promise<import(".prisma/client").testTable[]>;
    create(product: CreateProductDto): Promise<import(".prisma/client").testTable>;
    uniq(id: number): Promise<import(".prisma/client").testTable>;
    update(product: UpdateProductDto): Promise<import(".prisma/client").testTable>;
    delete(id: number): Promise<import(".prisma/client").testTable>;
}
