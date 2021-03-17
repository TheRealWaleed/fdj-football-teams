import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'transferMarket'
})
export class TransferMarketPipe implements PipeTransform {

  transform(input: any, args?: any): string {
    let exp;
    const suffixes = ['k', 'Mill', 'G', 'T', 'P', 'E'];

    if (Number.isNaN(input)) {
      return null;
    }

    if (input < 1000) {
      return input;
    }

    exp = Math.floor(Math.log(input) / Math.log(1000));

    return (input / Math.pow(1000, exp)).toFixed(args).replace('.', ',') + suffixes[exp - 1];
  }
}
