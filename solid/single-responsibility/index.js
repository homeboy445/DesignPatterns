import { emailService, paymentHandler } from "./plugins.js";
import { UserServices } from "./userServices.js";

// All the respective classes cater only one use-case!
// This makes sure that the single-responsibility principle is not violated!

function createUser() {
    const userHandler = new UserServices();
    userHandler.registerUser({ id: 1, name: "John Doe" });
    userHandler.registerUser({ id: 2, name: "Jane Doe" });

    console.log(userHandler.getUsers());

    paymentHandler.makePayment({ amount: 100 }, userHandler.getUserById(1));
    emailService.sendEmail("Amount deposited!", userHandler.getUserById(1));
}

createUser();
