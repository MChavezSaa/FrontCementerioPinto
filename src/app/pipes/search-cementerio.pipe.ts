import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter5'
})
export class SearchCementerioPipe implements PipeTransform {

  transform(items: any[], searchText: string): any {
    if (!items) {
      return [];
    }
    if (!searchText) {
      return items;
    }
    searchText = searchText.toLocaleLowerCase();
    return items.filter(it => {
      if (it.nombre_Cementerio != null) {
        return it.nombre_Cementerio.toLocaleLowerCase().includes(searchText);
      } else {
        return it.nombre_Cementerio.toLocaleLowerCase().includes(searchText);
      }
    });
  }
}



    


