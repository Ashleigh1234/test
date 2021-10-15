import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'filter'
})

export class SearchPipe implements PipeTransform {

  transform(value: any, args?: any): any {

    if(!args)
      return value;
    return value.filter(
      (item: any) => item.firstName.toLowerCase().indexOf(args.toLowerCase()) > -1 || item.lastName.toLowerCase().indexOf(args.toLowerCase()) > -1,
    );

  }
}
