export interface IStorage {
    get<T>(key: string): Promise<T | null>;
    set<T>(key: string, value: T): Promise<void>;
    delete(key: string): Promise<void>;
    list<T>(prefix: string): Promise<T[]>;
}

export class MemStorage implements IStorage {
    private store: Map<string, any> = new Map();

    async get<T>(key: string): Promise<T | null> {
        return this.store.get(key) || null;
    }

    async set<T>(key: string, value: T): Promise<void> {
        this.store.set(key, value);
    }

    async delete(key: string): Promise<void> {
        this.store.delete(key);
    }

    async list<T>(prefix: string): Promise<T[]> {
        const results: T[] = [];
        for (const [key, value] of this.store.entries()) {
            if (key.startsWith(prefix)) {
                results.push(value);
            }
        }
        return results;
    }
}
