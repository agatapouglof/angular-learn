import { Pipe, PipeTransform } from '@angular/core';

import * as moment from 'moment';

@Pipe({
  name: 'datelanguage'
})
export class DatelanguagePipe implements PipeTransform {

  DEFAULT_LANGUAGE = 'FR';
  transform(value: any, ...args: any[]): any {
    let countryCode = (args[0]) ? args[0] : this.DEFAULT_LANGUAGE ;
    let today = moment().locale(countryCode).format('LLLL');
    return today;
  }

}
