
class PaymentInterface { // abstract class
    pay(amount) {}
}

class Paypal extends PaymentInterface {
    pay(amount) {
        console.log(`Paying ${amount} using Paypal`);
    }
}

class CreditCard extends PaymentInterface {
    pay(amount) {
        console.log(`Paying ${amount} using Credit Card`);
    }
}

// Wrong thing to do since, in this adding new payment interface, we'll have to
// modify the existing class's code!
class PaymentFactory {
    static getPaymentMethod(type) {
        if (type === 'paypal') {
            return new Paypal();
        } else if (type === 'creditcard') {
            return new CreditCard();
        }
    }
}

function payAmount(paymentInterface, amount) {
    paymentInterface.pay(amount);
}

const paypal = new Paypal();
const creditCard = new CreditCard();

// With this way of doing things, we can easily add new payment methods without
// modifying the existing code.
payAmount(paypal, 100);
payAmount(creditCard, 200);
