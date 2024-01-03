import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Product } from './product.schema';
import { ProductDocument } from './product.schema';

@Injectable()
export class ProductsService {
    constructor(@InjectModel('Product') private productModel: Model<Product>) {}

    async getAll() {
        return this.productModel.find().exec();
    }

    async createProduct(Product: ProductDocument): Promise<ProductDocument> {
        const createdProduct = new this.productModel(Product);
        return createdProduct.save();
    }
}
