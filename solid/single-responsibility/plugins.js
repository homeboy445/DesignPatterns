/**
 * NetManager class will only handle network transactions.
 */
class NETManager {
    constructor() {
        this.requestFailures = [];
    }

    dispatch(URL, data) {
        return new Promise((resolve) => {
            resolve({ status: 200, data: { success: true } });
        }).catch((error) => {
            this.logFailure(error);
        });
    }

    logFailure(error) {
        this.requestFailures.push(error);
    }
}

/**
 * EmailService class will only handle email transactions.
 */
class EmailService {
    constructor(networkManager) {
        this.networkManager = networkManager;
        this.emails = [];
    }

    sendEmail(emailMessage, userData) {
        return this.networkManager.dispatch("/send-email", {
            msg: emailMessage,
            ...userData
        }).then(() => {
            console.log("Email sent to user ", userData);
        });
    }
}

/*
    PaymentHandler class will only handle payment transactions.
*/
class PaymentHandler {
    constructor(networkManager) {
        this.networkManager = networkManager;
    }

    makePayment(paymentData, userData) {
        return this.networkManager.dispatch("/make-payment", { paymentData, ...userData })
        .then(() => {
            console.log("payment successful for user", userData);
        });
    }
}

// Usage
const netManager = new NETManager();
const emailService = new EmailService(netManager);
const paymentHandler = new PaymentHandler(netManager);

export { emailService, paymentHandler };
