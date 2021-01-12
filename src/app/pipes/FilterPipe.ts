import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "filterTitle",
  pure: false
})
export class FilterPipe implements PipeTransform {
  transform(array: any, str: string, start?: any, end?: any): any {
    if (str === "") return array;
    return array.filter(item => {
      return item.title.toUpperCase().includes(str.toUpperCase());
    });
  }
}
