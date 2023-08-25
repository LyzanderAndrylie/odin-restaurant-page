import Controller from './Controller';
import View, { ViewImpl } from '../views';
import Page from '../models';

export default class ControllerImpl implements Controller {
  private view: View;

  private page: Page;

  constructor() {
    this.page = new Page();
    this.view = new ViewImpl(this, this.page);
    this.view.createView();
  }

  switchTab(tabIndex: number): void {
    this.page.switchTab(tabIndex);
    this.view.refresh();
  }
}
