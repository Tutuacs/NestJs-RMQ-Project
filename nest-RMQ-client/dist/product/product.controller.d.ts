import { ProductService } from './product.service';
import { CreateMailDto, CreateProductDto, UpdateProductDto } from './validation';
import { ClientProxy } from '@nestjs/microservices';
export declare class ProductController {
    private readonly productService;
    private readonly client;
    constructor(productService: ProductService, client: ClientProxy);
    create(product: CreateProductDto): Promise<CreateProductDto>;
    all(): Promise<import(".prisma/client").testTable[]>;
    uniq(id: number): Promise<import(".prisma/client").testTable>;
    update(id: number, product: UpdateProductDto): Promise<UpdateProductDto>;
    delete(id: number): Promise<number>;
    sendRmqMail(content: CreateMailDto): Promise<import("rxjs").Observable<any>>;
}
