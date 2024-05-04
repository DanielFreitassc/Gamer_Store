import { Module } from '@nestjs/common';
import { ProductsController } from './products.controller';
import { ProductsService } from './products.service';
import { InMemoryDBModule } from '@nestjs-addons/in-memory-db';

@Module({
  imports:[
    InMemoryDBModule.forRoot({}),
  ],
  controllers: [ProductsController],
  providers: [ProductsService]
})
export class ProductsModule {}
