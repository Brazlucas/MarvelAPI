import Comic from "./comic.model";
import Event from "./event.model";
import Serie from "./serie.model";
import Storie from "./storie.model";
import Thumbnail from "./thumbnail.model";
import Url from "./url.model";

class Character {
      public comics: Comic;
      public description: string;
      public events: Event;
      public id: number;
      public modified: string;
      public name: string;
      public resourceURI: string;
      public series: Serie;
      public stories: Storie;
      public thumbnail: Thumbnail;
      public urls: Url;

      constructor(data: any = {}) {
            this.comics = data.comics ? new Comic(data.comics) : new Comic();
            this.description = data.description || "";
            this.events = data.events ? new Event(data.events) : new Event();
            this.id = data.id || 0;
            this.modified = data.modified || "";
            this.name = data.name || "";
            this.resourceURI = data.resourceURI || "";
            this.series = data.events ? new Serie(data.series) : new Serie();
            this.stories = data.stories ? new Storie(data.stories) : new Storie();
            this.thumbnail = data.thumbnail ? new Thumbnail(data.thumbnail) : new Thumbnail();
            this.urls = data.urls ? new Url(data.urls) : new Url();
      }
}

export default Character;