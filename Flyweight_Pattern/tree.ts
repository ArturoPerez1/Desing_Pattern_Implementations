import TreeType from "./treeType.ts";

export default class Tree {
    private readonly x: number;
    private readonly y: number;
    private readonly treeType: TreeType;

    constructor(x: number, y: number, treeType: TreeType){
        this.x = x;
        this.y = y;
        this.treeType = treeType;
    }
    
    render(): void{
        console.log(
            `Arbol: ${this.treeType.treeName} Color: ${this.treeType.color} ` +
            `Textura: ${this.treeType.texture} Coordenada X: ${this.x} Coordenada Y: ${this.y}`
        );
    }
}
