import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ColorPaletteGeneratorComponent } from './color-palette-generator/color-palette-generator/color-palette-generator.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ColorPaletteGeneratorComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'color-palette-generator';
}
