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
exports.ProductController = void 0;
const common_1 = require("@nestjs/common");
const product_service_1 = require("./product.service");
const validation_1 = require("./validation");
const microservices_1 = require("@nestjs/microservices");
let ProductController = class ProductController {
    constructor(productService, client) {
        this.productService = productService;
        this.client = client;
    }
    async create(product) {
        await this.productService.create(product);
        this.client.emit('Product created', product);
        return product;
    }
    async all() {
        return this.productService.all();
    }
    async uniq(id) {
        return this.productService.uniq(id);
    }
    async update(id, product) {
        const productAtt = await this.productService.update(id, product);
        this.client.emit(`Product updated`, productAtt);
        return productAtt;
    }
    async delete(id) {
        await this.productService.delete(id);
        this.client.emit(`Product deleted`, id);
        return id;
    }
    async sendRmqMail(content) {
        return this.client.emit('sendEmail', content);
    }
};
__decorate([
    (0, common_1.Post)('create'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [validation_1.CreateProductDto]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "create", null);
__decorate([
    (0, common_1.Get)('all'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "all", null);
__decorate([
    (0, common_1.Get)('uniq/:id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "uniq", null);
__decorate([
    (0, common_1.Patch)('update/:id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, validation_1.UpdateProductDto]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)('delete/:id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "delete", null);
__decorate([
    (0, common_1.Post)('mail'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [validation_1.CreateMailDto]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "sendRmqMail", null);
ProductController = __decorate([
    (0, common_1.Controller)('product'),
    __param(1, (0, common_1.Inject)('PRODUCT_SERVICE')),
    __metadata("design:paramtypes", [product_service_1.ProductService,
        microservices_1.ClientProxy])
], ProductController);
exports.ProductController = ProductController;
//# sourceMappingURL=product.controller.js.map