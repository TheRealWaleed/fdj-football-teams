import { Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root',
})
export class SeoService {
  constructor(
    private title: Title,
    private meta: Meta,
  ) {}

  updateTitle(title: string): void {
    if (!title) {
      return;
    }

    this.title.setTitle(title);
  }

  updateDescription(content: string): void {
    if (!content) {
      return;
    }

    this.meta.updateTag({ name: 'description', content });
  }

  updateMetas(metas): void {
    if (!metas) {
      return;
    }

    Object.keys(metas).forEach((property) => {
      const content = metas[property];

      this.meta.updateTag({ property, content });
    });
  }
}
