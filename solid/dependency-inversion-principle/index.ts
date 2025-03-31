
interface CommunicationService {
    send: (message: string) => Promise<boolean>;
    isActive: () => boolean;
}

class EmailService implements CommunicationService {

    send(message: string) {
        console.log('sending email!');
        return Promise.resolve(true);
    }

    isActive() {
        return true;
    }
}

class TelephoneService implements CommunicationService {

    send(message: string) {
        console.log('sending message via telephone!');
        return Promise.resolve(true);
    }

    isActive() {
        return true;
    }
}

class NotificationService {
    
    messenger: CommunicationService;

    constructor(service: CommunicationService) {
        this.messenger = service;
    }

    sendMessage(message: string) {
        this.messenger.send(message);
    }
}

const emailNotifier = new NotificationService(new EmailService());
const telephoneNotifer = new NotificationService(new TelephoneService());
