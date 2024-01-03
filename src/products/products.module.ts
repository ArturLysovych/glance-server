import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductsController } from './products.controller';
import { ProductsService } from './products.service';
import { ProductSchema } from './product.schema';
import { ConfigModule } from '@nestjs/config';

@Module({
    imports: [
        ConfigModule.forRoot({ envFilePath: '.env' }),
        MongooseModule.forRoot(process.env.DB_CONNECTION),
        MongooseModule.forFeature([{ name: 'Product', schema: ProductSchema }])
    ],
    controllers: [ProductsController],
    providers: [ProductsService]
})
export class ProductsModule {}
