import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatSimplexResult',
  standalone: true
})
export class FormatSimplexResultPipe implements PipeTransform {
  transform(value: string): string {
    if (!value) return '';
    const firstLetter = value.charAt(0).toUpperCase();
    const category = value.slice(1);
    const article = this.getArticleForCategory(value);
    return `${article} ${firstLetter}${category}`;
  }

  private getArticleForCategory(category: string): string {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    return vowels.includes(category.charAt(0).toLowerCase()) ? 'an' : 'a';
  }
}
