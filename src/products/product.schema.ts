import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type ProductDocument = HydratedDocument<Product>;

@Schema()
export class Product {
  @Prop()
  id: number;

  @Prop()
  type: string;

  @Prop()
  name: string;

  @Prop()
  info: string;
    
  @Prop()
  image: string;
  
  @Prop()
  price: number;
  
  @Prop()
  oldPrice: number;
  
  @Prop()
  inStock: boolean;
}

export const ProductSchema = SchemaFactory.createForClass(Product);