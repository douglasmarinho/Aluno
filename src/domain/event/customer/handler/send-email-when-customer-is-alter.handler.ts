import EventHandlerInterface from "../../@shared/event-handler.interface";
import CustomerCreatedEvent from "../customer-created.event";

export default class SendEmailWhenCreateIsAlterHandler implements EventHandlerInterface<CustomerCreatedEvent>{
    
    handler(event: CustomerCreatedEvent): void {
       console.log(`Endereço do cliente: ${event.eventData.data.customer.id}, ${event.eventData.data.customer.name} alterado para: ${event.eventData.data.customer.adress}`);
    }

}