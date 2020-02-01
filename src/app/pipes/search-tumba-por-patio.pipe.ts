import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'FilterX'
})
export class SearchTumbaPorPatioPipe implements PipeTransform {

  transform(items: any[], searchText: number): any[] {

    if (!items) {
      return [];
    }
    if (!searchText) {
      return items;
    }    

    return items.filter(it => {
      if (it.nombres_Funcionario != null) {
        return it.tumba.id_Patio.includes(searchText);
      } else {
        return it.tumba.id_Patio.includes(searchText);
      }
    });
  }

}
