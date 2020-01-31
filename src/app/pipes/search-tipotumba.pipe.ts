import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter8'
})
export class SearchTipotumbaPipe implements PipeTransform {

  transform(items: any[], searchText: string): any {
    if (!items) {
      return [];
    }
    if (!searchText) {
      return items;
    }
    searchText = searchText.toLocaleLowerCase();
    return items.filter(it => {
      if (it.nombretipo_tumba != null) {
        return it.nombretipo_tumba.toLocaleLowerCase().includes(searchText);
      } else {
        return it.nombretipo_tumba.toLocaleLowerCase().includes(searchText);
      }
    });
  }

}