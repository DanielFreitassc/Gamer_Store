import { IsNumber, IsOptional, IsString, IsUUID } from "class-validator";

export class ProductDto {

    @IsUUID()
    @IsOptional()
    id: string;

    @IsString()
    image: string;

    @IsString()
    name: string;

    @IsNumber()
    price: number;

    @IsString()
    tag: string;
}