import MyElement from './MyElement';
import HomeContent from './HomeContent';
import MenuContent from './MenuContent';
import ContactContent from './ContactContent';

export default class Content implements MyElement {
  private contents: MyElement[] = [];

  private currentContentIndex = 0;

  constructor() {
    this.contents.push(new HomeContent());
    this.contents.push(new MenuContent());
    this.contents.push(new ContactContent());
  }

  setContentIndex(index: number) {
    this.currentContentIndex = index;
  }

  toElement(): Element {
    return this.contents[this.currentContentIndex].toElement();
  }
}
