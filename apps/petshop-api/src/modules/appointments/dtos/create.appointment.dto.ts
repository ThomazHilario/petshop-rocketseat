import { IsDateString, IsNotEmpty, IsString } from "class-validator";

export class CreateAppointmentDto {
    @IsString()
    @IsNotEmpty()
    petName: string;
    
    @IsString()
    @IsNotEmpty()
    tutorName: string;

    @IsString()
    @IsNotEmpty()
    phone: string;

    @IsString()
    @IsNotEmpty()
    service: string;

    @IsDateString()
    @IsNotEmpty()
    date: string;

}