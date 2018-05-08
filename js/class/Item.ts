export class Item {
    private chave: number;

    constructor(item: Item){
        this.chave = item.chave;
    }

    public getChave(){
        return this.chave;
    }

    public setChave(value: number){
        this.chave = value;
    }

    public compare(item: Item){
        if(this.chave < item.chave){
            return -1
        }else if (this.chave > item.chave){
            return 1
        }
    }

}