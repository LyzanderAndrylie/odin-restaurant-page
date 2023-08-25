import MyElement from './MyElement';
import { htmlToElement } from '../utils';
import TabItem from './TabItem';

export default class TabBar implements MyElement {
  private tabs: TabItem[] = [];

  private currentTabIndex = 0;

  constructor() {
    this.tabs.push(new TabItem('Home', this.tabs.length));
    this.tabs.push(new TabItem('Menu', this.tabs.length));
    this.tabs.push(new TabItem('Contact', this.tabs.length));
    this.toggleActiveCurrentTabItem();
  }

  setTabIndex(index: number) {
    this.toggleActiveCurrentTabItem();
    this.currentTabIndex = index;
    this.toggleActiveCurrentTabItem();
  }

  toggleActiveCurrentTabItem() {
    this.tabs[this.currentTabIndex].toggleActive();
  }

  toElement(): Element {
    const htmlStr = `
      <nav
          class="TabBar mx-auto flex w-[80vw] justify-between gap-4 rounded-xl border border-slate-200 p-4 mb-4 font-bold"
        >
          <ul class="contents">
          </ul>
        </nav>
    `;

    const element = htmlToElement(htmlStr);

    this.tabs.forEach((tab) => {
      element.querySelector('ul')!.appendChild(tab.toElement());
    });

    return element;
  }
}
