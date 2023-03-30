import Item from "./item.model";

class Comic {
      public available: number;
      public collectionURI: string;
      public items: Item[];
      public returned: number;

      constructor(data: any = {}) {
            this.available = data.available || 0;
            this.collectionURI = data.collectionURI || "";
            this.items = data.items || [];
            this.returned = data.returned || 0;
      }
      
}

export default Comic;