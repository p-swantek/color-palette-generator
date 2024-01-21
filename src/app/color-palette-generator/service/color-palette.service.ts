import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map } from 'rxjs';
import { ColorPaletteHex, ColorPaletteResponse } from './models';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ColorPaletteService {
  private apiUrl: string = 'http://colormind.io/api/';
  private colorHexSub: BehaviorSubject<ColorPaletteHex> = new BehaviorSubject({colorHex: []});

  colorPalette$: Observable<ColorPaletteHex> = this.colorHexSub.asObservable();

  constructor(private httpClient: HttpClient) { }

  generateRandomColorPalette(): void {
    this.httpClient.post<ColorPaletteResponse>(this.apiUrl, {
      model: 'default'
    }).pipe(
      map(response => this.createColorPaletteHex(response))
    ).subscribe(hex => this.colorHexSub.next(hex));
  }



  private createColorPaletteHex(response: ColorPaletteResponse): ColorPaletteHex {
    return {
      colorHex: response.result.map(rbg => this.convertRgbToHex(rbg))
    }
  }


  private convertRgbToHex(rgb: number[]): string{
    const red = rgb[0].toString(16).padStart(2, '0');
    const green = rgb[1].toString(16).padStart(2, '0');
    const blue = rgb[2].toString(16).padStart(2, '0');
    return `#${red}${green}${blue}`
  }
}
