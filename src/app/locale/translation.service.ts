import {EventEmitter, Injectable} from '@angular/core';
import {Lang, LangCz, LangEn, LangSk} from "./Lang";

const locales: string[] = [ "CZ", "SK", "EN" ];
type OnLocaleChanged = (locale: string) => any;

@Injectable()
export class TranslateService {

  private map = new Map<string, Lang>();
  private localChange: EventEmitter<string> = new EventEmitter();
  locale: string;

  constructor() {
    this.map["SK"] = new LangSk();
    this.map["CZ"] = new LangCz();
    this.map["EN"] = new LangEn();
  }

  translate(key: string): string {
    return this.map[this.getLocale().toUpperCase()].translate(key);
  }

  setLocale(locale: string) {
    this.locale = locale;
    this.localChange.emit(locale);
  }

  getLocale(): string {
    return this.locale;
  }

  getLocales(): string[] {
    return locales;
  }

  subscribe(callback: OnLocaleChanged): void {
    this.localChange.subscribe(callback);
  }

}
