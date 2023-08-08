"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const microservices_1 = require("@nestjs/microservices");
let ProductService = class ProductService {
    constructor(prisma, client) {
        this.prisma = prisma;
        this.client = client;
    }
    async create(product) {
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
    async uniq(id) {
        const product = this.prisma.testTable.findUnique({
            where: {
                id,
            },
        });
        return product;
    }
    async update(id, product) {
        await this.prisma.testTable.update({
            data: product,
            where: {
                id,
            },
        });
        product.id = id;
        return product;
    }
    async delete(id) {
        return this.prisma.testTable.delete({
            where: {
                id,
            },
        });
    }
};
ProductService = __decorate([
    (0, common_1.Injectable)(),
    __param(1, (0, common_1.Inject)('PRODUCT_SERVICE')),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        microservices_1.ClientProxy])
], ProductService);
exports.ProductService = ProductService;
//# sourceMappingURL=product.service.js.map