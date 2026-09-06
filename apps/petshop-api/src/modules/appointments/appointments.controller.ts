import { Body, Controller, Delete, Get, Param, Patch, Post } from "@nestjs/common";

import { AppointmentsService } from "./appointments.service";

import { CreateAppointmentDto, UpdateAppointmentDto } from "./dtos";

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

    @Patch()
    async updateAppointment(@Body() data:UpdateAppointmentDto){
        return this.appointmentsService.updateAppointment(data)
    }

    @Delete(':id')
    async deleteAppointment(@Param('id') id: string) {
        return this.appointmentsService.deleteAppointment(id);
    }
}