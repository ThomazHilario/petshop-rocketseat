import { HttpStatus } from "@nestjs/common";
import { CreateAppointmentDto } from "./dtos";
export declare class AppointmentsService {
    createAppointment(data: CreateAppointmentDto): Promise<{
        petName: string;
        tutorName: string;
        phone: string;
        service: string;
        date: Date;
        id: string;
    }>;
    findAllAppointment(): Promise<{
        appointments: {
            petName: string;
            tutorName: string;
            phone: string;
            service: string;
            date: Date;
            id: string;
        }[];
        total: number;
    }>;
    deleteAppointment(id: string): Promise<{
        message: string;
        status: HttpStatus;
    }>;
}
