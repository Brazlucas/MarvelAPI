import Item from "./item.model";

class Event {
      availabe: number;
      collectionURI: string;
      returned: number;
      public items: Item[];

      constructor(data: any = {}) {
            this.availabe = data.availabe || 0;
            this.collectionURI = data.collectionURI || "";
            this.items = data.items || [];
            this.returned = data.returned || 0;
      }
}

export default Event;