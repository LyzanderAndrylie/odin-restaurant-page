import { htmlToElement } from '../utils';
import MyElement from './MyElement';

export default class TabItem implements MyElement {
  private text: string;

  private index: number;

  private isActive = false;

  constructor(text: string, index: number) {
    this.text = text;
    this.index = index;
  }

  toggleActive() {
    this.isActive = !this.isActive;
  }

  toElement(): Element {
    const htmlStr = `
    <li
    class="TabItem w-1/3 rounded-xl ${
      this.isActive ? 'bg-tussock-600' : 'bg-tussock-200'
    } p-4 text-center ${
      this.isActive ? 'text-white' : 'text-tussock-800'
    } hover:bg-tussock-600 hover:text-white active:bg-tussock-700"
    data-key="${this.index}"
    >
      ${this.text}
    </li>
    `;

    return htmlToElement(htmlStr);
  }
}
