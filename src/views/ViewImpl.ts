import View from './View';
import Controller from '../controllers/Controller';
import MyElement from '../models';

export default class ViewImpl implements View {
  private controller: Controller;

  private page: MyElement;

  constructor(controller: Controller, page: MyElement) {
    this.controller = controller;
    this.page = page;
  }

  createView(): void {
    this.createPage();
    this.addTabItemListener();
  }

  createPage() {
    document.body.appendChild(this.page.toElement());
  }

  deletePage() {
    document.body.innerHTML = '';
  }

  refresh() {
    this.deletePage();
    this.createView();
  }

  addTabItemListener() {
    const tabItems = document.querySelectorAll('.TabItem');

    tabItems.forEach((tabItem) => {
      const tabIndex = Number((tabItem as HTMLElement).dataset.key);
      tabItem.addEventListener('click', () => {
        this.controller.switchTab(tabIndex);
      });
    });
  }
}
