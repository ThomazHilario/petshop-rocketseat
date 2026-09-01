import { IsEmail, IsString, IsNotEmpty, Matches } from "class-validator";

export class AuthLoginDTO {
    @IsString()
    @IsEmail()
    @IsNotEmpty()
    email: string;

    @IsString()
    @IsNotEmpty()
    @Matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/, {
        message: "Password must contain at least 8 characters, including one uppercase letter, one lowercase letter, one number and one special character"
    })
    password: string;
};
