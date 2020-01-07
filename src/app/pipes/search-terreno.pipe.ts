import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter6'
})
export class SearchTerrenoPipe implements PipeTransform {

  transform(items: any[], searchText: string): any {
    if (!items) {
      return [];
    }
    if (!searchText) {
      return items;
    }
    searchText = searchText.toLocaleLowerCase();
    return items.filter(it => {
      if (it.nombre_Terreno != null) {
        return it.nombre_Terreno.toLocaleLowerCase().includes(searchText);
      } else {
        return it.nombre_Terreno.toLocaleLowerCase().includes(searchText);
      }
    });
  }

}





