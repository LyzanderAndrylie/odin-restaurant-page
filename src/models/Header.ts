import { htmlToElement } from '../utils';
import MyElement from './MyElement';
import OdinLogo from '../assets/images/odin-logo.png';

export default class Header implements MyElement {
  private title: string;

  constructor(title: string) {
    this.title = title;
  }

  toElement(): Element | null {
    const htmlStr = `
      <header class="Header flex items-center justify-center p-4">
        <div class="flex items-center gap-2">
          <img class="w-14" src="${OdinLogo}" alt="The Odin Project Logo" />
          <span class="font-norse-bold text-2xl font-bold">${this.title}</span>
        </div>
      </header>
      `;
    return htmlToElement(htmlStr);
  }
}
