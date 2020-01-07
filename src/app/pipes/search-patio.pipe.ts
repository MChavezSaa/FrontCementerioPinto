import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter7'
})
export class SearchPatioPipe implements PipeTransform {

  transform(items: any[], searchText: string): any {
    if (!items) {
      return [];
    }
    if (!searchText) {
      return items;
    }
    searchText = searchText.toLocaleLowerCase();
    return items.filter(it => {
      if (it.nombre_Patio != null) {
        return it.nombre_Patio.toLocaleLowerCase().includes(searchText);
      } else {
        return it.nombre_Patio.toLocaleLowerCase().includes(searchText);
      }
    });
  }

}
