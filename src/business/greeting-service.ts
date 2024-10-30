

export class GreetingService {
  greet(name: string) {
    const greeting = `Hello, ${name}`;
    return greeting;
  }
}