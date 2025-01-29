import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'shared-search-box',
  standalone: false,
  templateUrl: './searchBox.component.html',
  styles: [],
})
export class SearchBoxComponent {
  @Input()
  public placeholder: string = '';

  @Output()
  public onValue: EventEmitter<string> = new EventEmitter();

  @ViewChild('txtInput')
  public txtInput!: ElementRef<HTMLInputElement>;

  emitValue(): void {
    this.onValue.emit(this.txtInput.nativeElement.value);
  }
}
