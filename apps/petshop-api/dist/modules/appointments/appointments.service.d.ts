import { HttpStatus } from "@nestjs/common";
import { CreateAppointmentDto } from "./dtos";
export declare class AppointmentsService {
    createAppointment(data: CreateAppointmentDto): Promise<{
        id: string;
        petName: string;
        tutorName: string;
        phone: string;
        service: string;
        date: Date;
    }>;
    findAllAppointment(): Promise<{
        appointments: {
            id: string;
            petName: string;
            tutorName: string;
            phone: string;
            service: string;
            date: Date;
        }[];
        total: number;
    }>;
    deleteAppointment(id: string): Promise<{
        message: string;
        status: HttpStatus;
    }>;
}
