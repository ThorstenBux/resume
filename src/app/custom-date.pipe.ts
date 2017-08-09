import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from "@angular/common";
/*
 * Raise the value exponentially
 * Takes an exponent argument that defaults to 1.
 * Usage:
 *   value | exponentialStrength:exponent
 * Example:
 *   {{ 2 | exponentialStrength:10 }}
 *   formats to: 1024
*/
@Pipe({name: 'customDate'})
export class CustomDate extends DatePipe{
  transform(value: any, pattern?: string): string {
    try {
        return super.transform(value,pattern);
    } catch (error) {
        //In case we cannot transform the input value we just pass it back
        return value;
    }
  }
}