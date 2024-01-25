import EventHandlerInterface from "../../@shared/event-handler.interface";
import CustomerCreatedEvent from "../customer-created.event";

export default class SendEmailWhenCreateIsCreateHandler implements EventHandlerInterface<CustomerCreatedEvent>{
    
    handler(event: CustomerCreatedEvent): void {
       console.log(`Esse é o primeiro console.log do evento: CustomerCreated`);
    }

    handler2(event: CustomerCreatedEvent): void {
        console.log(`Esse é o segundo console.log do evento: CustomerCreated`);
     }

}