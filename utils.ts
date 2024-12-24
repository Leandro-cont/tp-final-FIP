export class Utils {
    static generateUniqueId(existingIds: Set<string>): string {
      let id: string;
      do {
        id = Math.floor(Math.random() * 10000).toString();
      } while (existingIds.has(id));
      existingIds.add(id);
      return id;
    }
  }