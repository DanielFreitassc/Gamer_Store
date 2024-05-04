import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Post, Put, UsePipes, ValidationPipe } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductDto } from './product.dto';

@Controller('products')
export class ProductsController {
    constructor(private readonly productServices: ProductsService){}

    @HttpCode(HttpStatus.CREATED)
    @Post()
    @UsePipes(new ValidationPipe())
    create(@Body() product: ProductDto){
        return this.productServices.createProduct(product)
    }

    @HttpCode(HttpStatus.OK)
    @Get()
    listAll(){
        return this.productServices.listProducts()
    }

    @HttpCode(HttpStatus.OK)
    @Get('/:id')
    findById(@Param('id') id: string){
        return this.productServices.getProduct(+id)
    }

    @HttpCode(HttpStatus.OK)
    @Put('/:id')
    update(@Param('id') id:string, @Body() products: ProductDto){
        return this.productServices.updateProduct(Number(id),products)
    }

    @HttpCode(HttpStatus.NO_CONTENT)
    @Delete("/:id")
    delete(@Param('id') id:string){
        return this.productServices.deleteProduct(Number(id))
    }
}
