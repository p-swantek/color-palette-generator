import { Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import { ColorPaletteService } from '../service/color-palette.service';
import { ColorPaletteItemComponent } from '../color-palette-item/color-palette-item.component';
import { Observable, map } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-color-palette-generator',
  standalone: true,
  imports: [MatButtonModule, ColorPaletteItemComponent, CommonModule],
  templateUrl: './color-palette-generator.component.html',
  styleUrl: './color-palette-generator.component.scss'
})
export class ColorPaletteGeneratorComponent {

  colorHexes: Observable<string[]> = this.colorPaletteService.colorPalette$.pipe(
    map(hex => hex.colorHex)
  );

  constructor(private colorPaletteService: ColorPaletteService){}

  generateRandomColorPalette() {
    this.colorPaletteService.generateRandomColorPalette()
  }

}
