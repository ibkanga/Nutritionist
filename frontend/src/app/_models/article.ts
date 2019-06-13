export class Article {
  constructor(
    private id: number,
    private headline: string,
    private text: string,
    private photourl: string,
    private publishedon: string,
    private publishedby: string) {
      this.id = id;
      this.headline = headline;
      this.text = text;
      this.photourl = photourl;
      this.publishedon = publishedon;
      this.publishedby = publishedby;
    }
}
