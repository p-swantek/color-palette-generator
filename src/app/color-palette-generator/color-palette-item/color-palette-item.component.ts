import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-color-palette-item',
  standalone: true,
  imports: [],
  templateUrl: './color-palette-item.component.html',
  styleUrl: './color-palette-item.component.scss'
})
export class ColorPaletteItemComponent {

  @Input() colorHex: string;

}
