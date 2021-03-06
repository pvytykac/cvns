import {Pipe, PipeTransform} from '@angular/core';
import {Observable} from "rxjs/Observable";
import {TranslateService} from "../service/translation.service";

@Pipe({
  name: 'translate'
})
export class TranslationPipe implements PipeTransform {

  constructor(private ts: TranslateService) {
  }

  transform(value: string): any {
    return Observable.create(observer => {
      observer.next(this.ts.translate(value));
      this.ts.subscribe(locale => observer.next(this.ts.translate(value)));
    });
  }

}
