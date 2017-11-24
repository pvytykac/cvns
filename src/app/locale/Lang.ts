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
    this.map["fields"] = "Pole působnosti";
    this.map["home"] = "Domů";
    this.map["contact"] = "Kontakt";
    this.map["sponsors"] = "Sponzoři a dárcové";
    this.map["news"] = "Novinky";
    this.map["about"] = "O nás";
    this.map["people"] = "Lidé";
    this.map["projects"] = "Projekty";
    this.map["publications"] = "Publikace";
    this.map["more"] = "Víc";
  }

  protected getMap(): Map<string, string> {
    return this.map;
  }
}

export class LangSk extends Lang {

  private map: Map<string, string> = new Map();

  constructor() {
    super();
    this.map["fields"] = "Pole pôsobnosti";
    this.map["home"] = "Domov";
    this.map["contact"] = "Kontakt";
    this.map["sponsors"] = "Sponzori a darcovia";
    this.map["news"] = "Novinky";
    this.map["about"] = "O nás";
    this.map["people"] = "Ľudia";
    this.map["projects"] = "Projekty";
    this.map["publications"] = "Publikácie";
    this.map["more"] = "Viac";
  }

  protected getMap(): Map<string, string> {
    return this.map;
  }
}

export class LangEn extends Lang {

  private map: Map<string, string> = new Map();

  constructor() {
    super();
    this.map["fields"] = "Areas of expertise";
    this.map["home"] = "Home";
    this.map["contact"] = "Contact";
    this.map["sponsors"] = "Sponsors and donors";
    this.map["news"] = "News";
    this.map["about"] = "About";
    this.map["people"] = "People";
    this.map["projects"] = "Projects";
    this.map["publications"] = "Publications";
    this.map["more"] = "See more";
  }

  protected getMap(): Map<string, string> {
    return this.map;
  }
}
