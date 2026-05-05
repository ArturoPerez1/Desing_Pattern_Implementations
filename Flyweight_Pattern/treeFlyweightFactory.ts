import PineTree from "./pineTree.ts";
import TreeType from "./treeType.ts";
import OakTree from "./oakTree.ts";

export default class TreeFlyweightFactory {
    private readonly treeTypes: Map<string, TreeType> = new Map();
    private readonly treeTypeCreators: Map<string, () => TreeType> = new Map([
        ["pine", () => new PineTree()],
        ["oak", () => new OakTree()]
    ]);

    getTreeType(key: string): TreeType {
        const normalizedKey = key.toLowerCase();
        const existingTreeType = this.treeTypes.get(normalizedKey);

        if (existingTreeType) {
            return existingTreeType;
        }

        const treeTypeCreator = this.treeTypeCreators.get(normalizedKey);
        if (!treeTypeCreator) {
            throw new Error(`Tree type "${key}" is not registered in the flyweight factory.`);
        }

        const newTreeType = treeTypeCreator();
        this.treeTypes.set(normalizedKey, newTreeType);

        return newTreeType;
    }

    registerTreeType(key: string, treeTypeCreator: () => TreeType): void {
        this.treeTypeCreators.set(key.toLowerCase(), treeTypeCreator);
    }

    getTotalTypes(): number {
        return this.treeTypes.size;
    }
}
