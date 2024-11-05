import createPrompt from 'prompt-sync';
import { ProvideNamePrimaryPort } from '../business/greeting-service';

export function runPromptApp(greetingService: ProvideNamePrimaryPort) {
    const prompt = createPrompt();
    
    const name = prompt("Your name is: ");
    
    const greeting = greetingService.greet(name);
    console.log(greeting);
}