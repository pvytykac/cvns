export abstract class Lang {

  protected abstract getMap(): Map<string, string>;

  public translate(key: string): string {
    const val = this.getMap()[key];
    return (val) ? val : "??? " + key + " ???";
  }

}

export class LangCz extends Lang {

  private map: Map<string, string> = new Map();

  constructor() {
    super();
    this.map["news"] = "Novinky";
    this.map["about"] = "O nás";
    this.map["people"] = "Ľudia";
    this.map["projects"] = "Projekty";
    this.map["publications"] = "Publikácie";
  }

  protected getMap(): Map<string, string> {
    return this.map;
  }
}

export class LangEn extends Lang {

  private map: Map<string, string> = new Map();

  constructor() {
    super();
    this.map["news"] = "News";
    this.map["about"] = "About";
    this.map["people"] = "People";
    this.map["projects"] = "Projects";
    this.map["publications"] = "Publications";
  }

  protected getMap(): Map<string, string> {
    return this.map;
  }
}
