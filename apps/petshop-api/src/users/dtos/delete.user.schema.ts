import { IsEmail, IsNotEmpty, IsString } from "class-validator";

export class DeleteUserDTO {
    @IsString()
    @IsNotEmpty()
    id: string;
};
