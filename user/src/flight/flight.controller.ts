import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from 'src/auth/decorators/guard';
import { FlightService } from './flight.service';

@Controller('flight')
export class FlightController {
    constructor(private flightService: FlightService) { }

    @UseGuards(AuthGuard)
    @Post('booking')
    bookFlight(@Body() dto: { userId: number }) {
        return this.flightService.bookFlightByUserId(dto.userId)
    }
}
