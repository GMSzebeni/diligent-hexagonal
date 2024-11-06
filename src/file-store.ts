import { existsSync, PathLike, writeFileSync } from "node:fs";
import { appendFile, readFile } from "node:fs/promises";

type FileFormat = "json" | "txt";

export class FileStore {
    constructor(private readonly path: PathLike, private readonly format: FileFormat) {
        if(!existsSync(this.path)) {
            if (this.format === 'txt') {
                writeFileSync(this.path, "", 'utf-8');
            }
            if (this.format === 'json') {
                writeFileSync(this.path, "[]", 'utf-8');
            }
        }
    }

    async read(): Promise<string[]> {
        const content = await readFile(this.path, 'utf-8');
        const data = content ? JSON.parse(content) : [];
        return data;
    }

    async write(data: string | string[]) {
        if (typeof data === 'string') {
            await appendFile(this.path, data + '\r\n', 'utf-8');
        } else if (data instanceof Array) {
            const content = JSON.stringify(data, null, 2)
            writeFileSync(this.path, content, 'utf-8');
        }
    }
}