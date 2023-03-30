import Item from "./item.model";

class Thumbnail {
      public extension: string;
      public items: Item[];
      public path: string;

      constructor(data: any = {}) {
            this.extension = data.extension || "";
            this.items = data.items || [];
            this.path = data.path || "";
      }
}

export default Thumbnail;