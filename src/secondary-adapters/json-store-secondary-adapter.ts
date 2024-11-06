import { StoreGreetingSecondaryPort } from "../business/greeting-service";
import { FileStore } from "../file-store";

export class JsonStoreSecondaryAdapter implements StoreGreetingSecondaryPort {
    private readonly store: FileStore;

    constructor(store: FileStore) {
        this.store = store;
    }

    async save(greeting: string) {
        const greetings = await this.store.read() as string[];
        greetings.push(JSON.parse(`{ "greeting": "${greeting}" }`));
        await this.store.write(greetings);
    };
}