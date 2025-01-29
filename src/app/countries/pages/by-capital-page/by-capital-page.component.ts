import { Component } from '@angular/core';

@Component({
  selector: 'countries-by-capital-page',
  standalone: false,

  templateUrl: './by-capital-page.component.html',
  styles: ``,
})
export class ByCapitalPageComponent {
  searchByCapital(term: string): void {
    console.log('Desde by-capital-page.component.ts');
    console.log({ term });
  }
}
