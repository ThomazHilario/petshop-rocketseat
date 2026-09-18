import { AppointmentsService } from "./appointments.service";
import { CreateAppointmentDto, UpdateAppointmentDto } from "./dtos";
export declare class AppointmentsController {
    private readonly appointmentsService;
    constructor(appointmentsService: AppointmentsService);
    createAppointment(data: CreateAppointmentDto): Promise<{
        petName: string;
        tutorName: string;
        phone: string;
        service: string;
        date: Date;
        id: string;
    }>;
    findAllAppointments(): Promise<{
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
    updateAppointment(data: UpdateAppointmentDto): Promise<{
        message: string;
        status: import("@nestjs/common", { with: { "resolution-mode": "import" } }).HttpStatus;
    }>;
    deleteAppointment(id: string): Promise<{
        message: string;
        status: import("@nestjs/common", { with: { "resolution-mode": "import" } }).HttpStatus;
    }>;
}
