import {Item} from "./Item";

export class No {

    private item: Item;
    private filhoEsq: No;
    private filhoDir: No;
    private incE: number;
    private incD: number;

    constructor(item: Item){
        this.item = item;
        this.filhoDir = null;
        this.filhoEsq = null;
        this.incE = 1;
        this.incD = 1;
    }

    public getItem(): Item{
        return this.item;
    }

    public setItem(item: Item): void{
        this.item = item;
    }

    public getFilhoEsq(): No{
        return this.filhoEsq;
    }

    public getFilhoDir(): No{
        return this.filhoDir;
    }

    public setFilhoEsq(no: No): void{
        this.filhoEsq = no;
    }

    public setFilhoDir(no: No): void{
        this.filhoDir = no;
    }

    public getIncE(): number{
        return this.incE
    }

    public getIncD(): number{
        return this.incD
    }

    public setIncE(value: number): void{
        this.incE = value;
    }

    public setIncD(value: number): void{
        this.incD = value;
    }

}