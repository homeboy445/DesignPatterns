
class Birds {
    fly() {
        console.log("A generic fly function!");
    }
}

class Parrot extends Birds {
    fly() {
        console.log("Parrot can fly!");
    }
}

class Penguin extends Birds {
    fly() { // This breaks the LSP!
        // As using this as base class of Birds class, it will break!
        throw new Error("Penguin can't fly!");
    }
}
