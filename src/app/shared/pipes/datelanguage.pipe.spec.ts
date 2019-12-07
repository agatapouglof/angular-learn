import { DatelanguagePipe } from './datelanguage.pipe';

import * as moment from 'moment';

describe('DatelanguagePipe', () => {
  let pipe : DatelanguagePipe;
  beforeEach(() => {
    pipe = new DatelanguagePipe();
  });
  
  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it("should be FR by default", ()=>{
    expect(pipe.DEFAULT_LANGUAGE).toBe('FR');
  });

  it('should call moment with DEFAULT_LANGUAGE', ()=> {
    let lang = 'pt';
    pipe.DEFAULT_LANGUAGE = lang;
    let momentTest = moment().locale(lang).format('LLLL');

    let result = pipe.transform('today');

    expect(result).toEqual(momentTest);
  });

  it('should call moment with parameter language', ()=> {
    let lang = 'deu';
    let momentTest = moment().locale(lang).format('LLLL');

    let result = pipe.transform('today', lang);

    expect(result).toEqual(momentTest);
  });
});
