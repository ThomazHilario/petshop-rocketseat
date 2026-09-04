"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppointmentsService = void 0;
const common_1 = require("@nestjs/common");
const prisma_1 = require("../../prisma");
let AppointmentsService = class AppointmentsService {
    async createAppointment(data) {
        return prisma_1.prisma.appointment.create({
            data
        });
    }
    async findAllAppointment() {
        const appointments = await prisma_1.prisma.appointment.findMany();
        return {
            appointments,
            total: appointments.length
        };
    }
    async updateAppointment(data) {
        try {
            await prisma_1.prisma.appointment.update({
                data,
                where: {
                    id: data.id
                }
            });
            return {
                message: "Updated appointment successfully",
                status: common_1.HttpStatus.OK
            };
        }
        catch (error) {
            return {
                message: "Appointment not found",
                status: common_1.HttpStatus.NOT_FOUND
            };
        }
    }
    async deleteAppointment(id) {
        try {
            await prisma_1.prisma.appointment.delete({
                where: {
                    id
                }
            });
            return {
                message: "Appointment deleted successfully",
                status: common_1.HttpStatus.OK
            };
        }
        catch (error) {
            return {
                message: "Appointment not found",
                status: common_1.HttpStatus.NOT_FOUND
            };
        }
    }
};
exports.AppointmentsService = AppointmentsService;
exports.AppointmentsService = AppointmentsService = __decorate([
    (0, common_1.Injectable)()
], AppointmentsService);
//# sourceMappingURL=appointments.service.js.map