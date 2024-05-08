import { Injectable } from '@nestjs/common';
import { KafkaProducerService } from 'src/kafka/Producer.service';
import { FLIGHT } from 'src/kafka/constant';

@Injectable()
export class FlightService {
    constructor(private kafkaProducer: KafkaProducerService) { }

    async bookFlightByUserId(userId: number) {
        console.log(`:::::::: FLIGHT FOR USER -${userId}- :::::: CREATED! ::::::`)
        this.kafkaProducer.produce({
            topic: FLIGHT.BOOK_FLIGHT,
            messages: [{
                value: "Hello! Take me to Canada"
            }]
        });

        return { message: "Flight was successfully created" }
    }

}
