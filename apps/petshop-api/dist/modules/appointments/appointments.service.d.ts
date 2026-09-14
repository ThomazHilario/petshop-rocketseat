import { HttpStatus } from '@nestjs/common';
import { CreateAppointmentDto, UpdateAppointmentDto } from './dtos';
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
    updateAppointment(data: UpdateAppointmentDto): Promise<{
        message: string;
        status: HttpStatus;
    }>;
    deleteAppointment(id: string): Promise<{
        message: string;
        status: HttpStatus;
    }>;
}
