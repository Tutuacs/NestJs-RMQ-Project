import { CreateProductDto, UpdateProductDto } from './validation';
import { ProductService } from './product.service';
export declare class ProductController {
    private readonly productService;
    constructor(productService: ProductService);
    all(): Promise<import(".prisma/client").testTable[]>;
    created(product: CreateProductDto): Promise<import(".prisma/client").testTable>;
    updated(product: UpdateProductDto): Promise<import(".prisma/client").testTable>;
    deleted(id: number): Promise<import(".prisma/client").testTable>;
}
