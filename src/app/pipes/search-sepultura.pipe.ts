import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter10'
})
export class SearchSepulturaPipe implements PipeTransform {

  transform(items: any[], searchText: string): any {
    if (!items) {
      return [];
    }
    if (!searchText) {
      return items;
    }
    searchText = searchText.toLocaleLowerCase();
    return items.filter(it => {
      if (it.difunto.rut_Difunto != null) {
        return it.difunto.rut_Difunto.toLocaleLowerCase().includes(searchText);
      } else {
        return it.difunto.rut_Difunto.toLocaleLowerCase().includes(searchText);
      }
    });
  }

}



