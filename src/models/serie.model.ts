import Item from "./item.model";

class Serie {
      public availabe: number;
      public collectionURI: string;
      public items: Item[];
      public returned: number;

      constructor(data: any = {}) {
            this.availabe = data.availabe || 0;
            this.collectionURI = data.collectionURI || "";
            this.items = data.items || [];
            this.returned = data.returned || 0;
      }
}

export default Serie;