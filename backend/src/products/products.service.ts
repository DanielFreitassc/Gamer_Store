import { InMemoryDBService } from '@nestjs-addons/in-memory-db';
import { HttpCode, HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { EntityProducts } from './product.entity';
import { ProductDto } from './product.dto';
import {v4 as uuid} from 'uuid'
import { NotFoundError } from 'rxjs';

@Injectable()
export class ProductsService {
    constructor(private readonly db: InMemoryDBService<EntityProducts>){}

    createProduct(product: ProductDto): ProductDto{
        product.id = uuid();
        return this.db.create(product)
    }

    getProduct(id:string){
        const product = this.db.get(id)

        if(!product){
            throw new NotFoundException("Produto não encontrado")
        }

        return product
    }

    listProducts(){
        return this.db.getAll()
    }

    updateProduct(product:ProductDto){
        const findId = this.db.get(product.id)

        if(!findId){
            throw new NotFoundException('Produto não encontrado')
        }

        this.db.update({
            id: product.id,
            image: product.image, 
            name: product.name,
            price: product.price,
            tag: product.tag, 
        })

        return 
    }

    deleteProduct(id: string){
        const findId = this.db.get(id)

        if(!findId){
            throw new NotFoundException("Produto não encontrado")
        }

        return this.db.delete(id)
    }
}
