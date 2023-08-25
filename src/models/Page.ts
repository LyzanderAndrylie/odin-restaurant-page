import { htmlToElement } from '../utils';
import MyElement from './MyElement';
import Header from './Header';
import Main from './Main';

export default class Page implements MyElement {
  private header: Header;

  private main: Main;

  constructor() {
    this.header = new Header('The Odin Restaurant');
    this.main = new Main();
  }

  switchTab(index: number) {
    this.main.setContent(index);
  }

  toElement(): Element {
    const htmlStr = `
      <div></div>
    `;

    const element = htmlToElement(htmlStr);

    element.appendChild(this.header.toElement());
    element.appendChild(this.main.toElement());

    return element;
  }
}
