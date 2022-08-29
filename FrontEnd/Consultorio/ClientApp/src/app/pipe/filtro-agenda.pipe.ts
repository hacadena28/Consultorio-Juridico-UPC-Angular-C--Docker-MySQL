import { Pipe, PipeTransform } from '@angular/core';
import { Agenda } from '../consultorio/models/agenda';

@Pipe({
  name: 'filtroAgenda'
})
export class FiltroAgendaPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    /*if (searchText == null) return Agenda;
    return Agenda.filter(a=>where agenda);*/
  }

}
