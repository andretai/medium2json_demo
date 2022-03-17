import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'htmlcontent'
})
export class HtmlcontentPipe implements PipeTransform {

  transform(value: string, element: string): string {
    var span = document.createElement('span');
    span.innerHTML = value;
    var els = Array.from(span.childNodes);
    // console.log(els)
    if (els.length == 1) {
      return els[0].textContent + '..';
    } else if (els.length > 1) {
      els = els.filter(el => el.nodeName === element)
      return els[0].textContent + '..';
    }
    return '';
  }

}
