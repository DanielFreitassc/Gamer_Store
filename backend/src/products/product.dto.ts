import { IsDate, IsNumber, IsOptional, IsString } from "class-validator";

export class ProductDto {

    @IsNumber()
    @IsOptional()
    id: number;

    @IsString()
    image: string;

    @IsString()
    name: string;

    @IsNumber()
    price: number;

    @IsString()
    tag: string;

    @IsDate()
    @IsOptional()
    created_at: Date;
}