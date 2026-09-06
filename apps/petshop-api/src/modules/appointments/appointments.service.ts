import { HttpStatus, Injectable } from "@nestjs/common";

import { CreateAppointmentDto, UpdateAppointmentDto } from "./dtos";

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

    async updateAppointment(data: UpdateAppointmentDto){
        try {
            await prisma.appointment.update({
                data,
                where: {
                    id: data.id
                }
            })

            return {
                message: "Updated appointment successfully",
                status: HttpStatus.OK
            }
        } catch(error){
            return {
                message: "Appointment not found",
                status: HttpStatus.NOT_FOUND
            }
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