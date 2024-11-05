import { ProvideNamePrimaryPort } from "../business/greeting-service"

export function runArgsApp(greetingService: ProvideNamePrimaryPort) {
    const [,,name] = process.argv;
    const greeting = greetingService.greet(name);
    console.log(greeting);
}