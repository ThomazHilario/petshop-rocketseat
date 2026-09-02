import { AppointmentsService } from "./appointments.service";
import { CreateAppointmentDto } from "./dtos";
export declare class AppointmentsController {
    private readonly appointmentsService;
    constructor(appointmentsService: AppointmentsService);
    createAppointment(data: CreateAppointmentDto): Promise<{
        id: string;
        petName: string;
        tutorName: string;
        phone: string;
        service: string;
        date: Date;
    }>;
    findAllAppointments(): Promise<{
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
        status: import("@nestjs/common", { with: { "resolution-mode": "import" } }).HttpStatus;
    }>;
}
