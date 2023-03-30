class Item {
      public name: string;
      public resourceURI: string;
      public type: string;
      public url: string;

      constructor(data: any = {}) {
            this.name = data.name || "";
            this.resourceURI = data.resourceURI || "";
            this.type = data.type || "";
            this.url = data.url || "";
      }
}

export default Item;