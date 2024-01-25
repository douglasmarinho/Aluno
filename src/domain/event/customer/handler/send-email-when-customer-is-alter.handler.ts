import EventHandlerInterface from "../../@shared/event-handler.interface";
import CustomerCreatedEvent from "../customer-created.event";

export default class SendEmailWhenCreateIsAlterHandler implements EventHandlerInterface<CustomerCreatedEvent>{
    
    handler(event: CustomerCreatedEvent): void {
       console.log(`Endereço do cliente: ${event.eventData.id}, ${event.eventData.nome} alterado para: ${event.eventData.endereco}`);
    }

}