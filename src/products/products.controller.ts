import { Controller, Get, Post, Body } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductDocument } from './product.schema';

@Controller('products')
export class ProductsController {
    constructor(private productsService: ProductsService) { }
    
    @Get()
    async getAll(): Promise<ProductDocument[]> {
        return this.productsService.getAll();
    }

    @Post()
    async createProduct(@Body() product: ProductDocument): Promise<ProductDocument> {
        return this.productsService.createProduct(product);
    }
}
