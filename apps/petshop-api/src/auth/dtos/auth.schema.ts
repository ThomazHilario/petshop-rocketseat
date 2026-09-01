import { IsEmail, IsString, IsNotEmpty, Matches } from "class-validator";

export class AuthLoginDTO {
    @IsString()
    @IsEmail()
    @IsNotEmpty()
    email: string;

    @IsString()
    @IsNotEmpty()
    @Matches()
    password: string;
};
