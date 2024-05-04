import { BadRequestException, HttpCode, HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { ProductDto } from './product.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class ProductsService {
    constructor(private readonly prisma: PrismaService){}

    async createProduct(product: ProductDto): Promise<ProductDto | null>{
        return this.prisma.products.create({
            data: {
                name: product.name,
                image: product.image,
                price: product.price,
                tag: product.tag,
            }
        })
    }

    async getProduct(id:number): Promise<ProductDto | null>{
         
        const product = await this.prisma.products.findFirst({
            where:{
                id:id
            }
        })

        if(!product){
            throw new NotFoundException("Produto não encontrado")
        }

        return product
    }

    listProducts(){
        return this.prisma.products.findMany()
    }

    async updateProduct(product:ProductDto): Promise<ProductDto | null>{
        
        if(!product.id){
            throw new BadRequestException("Id não enviado")
        }

        const productId = Number(product.id);

        const findUnique = await this.prisma.products.findFirst({
            where:{
                id: productId
            }
        })
        
        if(!findUnique){
            throw new NotFoundException('Usuario não encontrado')
        }

       return await this.prisma.products.update({
            where:{
                id: productId
            },
            data:{
                image: product.image,
                name: product.name,
                price: product.price,
                tag: product.tag
            }
        })
    }

    async deleteProduct(id: number){
        const product = await this.prisma.products.findFirst({
            where:{
                id: id
            }
        })

        if(!product){
            throw new NotFoundException("Produto não encontrado")
        }
    
        return this.prisma.products.delete({
            where:{
                id:id
            }
        })

    }
}
