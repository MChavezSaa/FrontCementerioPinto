import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter2'
})
export class SearchVentaPipe implements PipeTransform {

  transform(items: any[], searchText: string): any[] {

    if (!items) {
      return [];
    }
    if (!searchText) {
      return items;
    }
    searchText = searchText.toLocaleLowerCase();

    return items.filter(it => {
      if (it.cliente.nombres_Cliente != null) {
        return it.cliente.nombres_Cliente.toLocaleLowerCase().includes(searchText);
      } else {
        return it.cliente.nombres_Cliente.toLocaleLowerCase().includes(searchText);
      }
    });
  }
}
