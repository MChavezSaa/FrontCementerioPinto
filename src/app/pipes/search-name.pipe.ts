import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class SearchNamePipe implements PipeTransform {

  transform(items: any[], searchText: string): any[] {

    if (!items) {
      return [];
    }
    if (!searchText) {
      return items;
    }
    searchText = searchText.toLocaleLowerCase();

    return items.filter(it => {
      if (it.nombres_Funcionario != null) {
        return it.nombres_Funcionario.toLocaleLowerCase().includes(searchText);
      } else {
        return it.nombres_Funcionario.toLocaleLowerCase().includes(searchText);
      }
    });
  }
}
