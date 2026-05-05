import Tree from "./tree.ts";
import TreeFlyweightFactory from "./treeFlyweightFactory.ts";

export default class Forest {
    private readonly trees: Tree[] = [];
    private readonly treeFactory: TreeFlyweightFactory;

    constructor(treeFactory: TreeFlyweightFactory) {
        this.treeFactory = treeFactory;
    }

    plantTree(x: number, y: number, treeTypeKey: string): void{
        const treeType = this.treeFactory.getTreeType(treeTypeKey);
        this.trees.push(new Tree(x, y, treeType));
    }

    render():void{
        for(let tree of this.trees){
            tree.render();
        }
    }

    getTreeCount(): number {
        return this.trees.length;
    }
}
