import { HttpStatus, Injectable } from "@nestjs/common";

import { CreateAppointmentDto } from "./dtos";

import { prisma } from "../../prisma";

@Injectable()
export class AppointmentsService {
    async createAppointment(data: CreateAppointmentDto) {
        return prisma.appointment.create({
            data
        });
    }

    async findAllAppointment() {
        const appointments = await prisma.appointment.findMany();

        return {
            appointments,
            total: appointments.length
        }
    }

    async deleteAppointment(id: string) {
        try {
            await prisma.appointment.delete({
                where: {
                    id
                }
            })

            return {
                message: "Appointment deleted successfully",
                status: HttpStatus.OK
            }
        } catch (error) {
            return {
                message: "Appointment not found",
                status: HttpStatus.NOT_FOUND
            }
        }
    }
}