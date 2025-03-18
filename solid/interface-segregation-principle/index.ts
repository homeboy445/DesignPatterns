
// The below code is a good example to showcase ISP. Since developer and QA both have their own interfaces,
// it is easier to implement them separately. This way, we can avoid implementing unnecessary methods in the classes.

interface Worker {
    id: string;
    attendMeeting(): void;
    logIn(): void;
    logOut(): void;
}

interface Developer extends Worker {
    writeCode(requirement: string): void;
}

interface QA extends Worker {
    testCode(requirement: string): void;
}

class Employee implements Worker {
    id: string;

    constructor(id: string) {
        this.id = id;
    }

    attendMeeting(): void {
        console.log('Attending meeting');
    }

    logIn(): void {
        console.log('Logging in');
    }

    logOut(): void {
        console.log('Logging out');
    }
}

class Developer extends Employee implements Developer {
    writeCode(requirement: string): void {
        console.log(`Writing code for ${requirement}`);
    }
}

class QA extends Employee implements QA {
    testCode(requirement: string): void {
        console.log(`Testing code for ${requirement}`);
    }
}

// Example for showcasing the case where ISP is not followed

interface PaymentInterface {
    makePayment(): void;
    getPaymentStatus(): void;
    refundPayment(): void;
    getProductsList(): void;
    orderItems(): void;
}

class PaymentsHandler implements PaymentInterface {
    makePayment(): void {
        console.log('Making payment');
    }

    getPaymentStatus(): void {
        console.log('Getting payment status');
    }

    refundPayment(): void {
        console.log('Refunding payment');
    }

    getProductsList(): void { // We shouldn't have the need to implement this method in this class!
        console.log('Getting products list');
    }

    orderItems(): void { // We shouldn't have the need to implement this method in this class!
        console.log('Ordering items');
    }
}
