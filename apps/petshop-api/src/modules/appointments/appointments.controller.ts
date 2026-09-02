import { Body, Controller, Delete, Get, Param, Post } from "@nestjs/common";

import { AppointmentsService } from "./appointments.service";

import { CreateAppointmentDto } from "./dtos";

@Controller('appointments')
export class AppointmentsController {
    constructor(private readonly appointmentsService: AppointmentsService) {}

    @Post()
    async createAppointment(@Body() data: CreateAppointmentDto) {
        return this.appointmentsService.createAppointment(data);
    }

    @Get()
    async findAllAppointments() {
        return this.appointmentsService.findAllAppointment();
    }

    @Delete(':id')
    async deleteAppointment(@Param('id') id: string) {
        return this.appointmentsService.deleteAppointment(id);
    }
}