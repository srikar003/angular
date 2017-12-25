import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(sr: any, term: string): any {
    if(term === undefined) return sr;
    return sr.filter(function(sr_single){
      return sr_single.name.toLowerCase().includes(term.toLowerCase());
      });
    }
}
