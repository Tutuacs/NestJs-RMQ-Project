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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductController = void 0;
const common_1 = require("@nestjs/common");
const microservices_1 = require("@nestjs/microservices");
const validation_1 = require("./validation");
const product_service_1 = require("./product.service");
let ProductController = class ProductController {
    constructor(productService) {
        this.productService = productService;
    }
    async all() {
        return this.productService.all();
    }
    async created(product) {
        return this.productService.create(product);
    }
    async updated(product) {
        return this.productService.update(product);
    }
    async deleted(id) {
        return this.productService.delete(id);
    }
};
__decorate([
    (0, common_1.Get)('all'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "all", null);
__decorate([
    (0, microservices_1.EventPattern)('Product created'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [validation_1.CreateProductDto]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "created", null);
__decorate([
    (0, microservices_1.EventPattern)('Product updated'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [validation_1.UpdateProductDto]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "updated", null);
__decorate([
    (0, microservices_1.EventPattern)('Product deleted'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "deleted", null);
ProductController = __decorate([
    (0, common_1.Controller)('product'),
    __metadata("design:paramtypes", [product_service_1.ProductService])
], ProductController);
exports.ProductController = ProductController;
//# sourceMappingURL=product.controller.js.map