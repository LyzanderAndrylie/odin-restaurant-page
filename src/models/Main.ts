import MyElement from './MyElement';
import { htmlToElement } from '../utils';
import TabBar from './TabBar';
import Content from './Content';

export default class Main implements MyElement {
  private tabBar: TabBar;

  private content: Content;

  private currentTabIndex = 0;

  constructor() {
    this.tabBar = new TabBar();
    this.content = new Content();
  }

  setContent(index: number) {
    this.currentTabIndex = index;
    this.tabBar.setTabIndex(index);
    this.content.setContentIndex(index);
  }

  toElement(): Element {
    const htmlStr = `
      <main class="Main min-h-screen font-roboto p-4">
      </main>
    `;

    const element = htmlToElement(htmlStr);

    element.appendChild(this.tabBar.toElement());
    element.appendChild(this.content.toElement());

    return element;
  }
}
