import { element, by, ElementFinder } from 'protractor';

export class StoreComponentsPage {
  createButton = element(by.id('jh-create-entity'));
  deleteButtons = element.all(by.css('jhi-store div table .btn-danger'));
  title = element.all(by.css('jhi-store div h2#page-heading span')).first();

  async clickOnCreateButton() {
    await this.createButton.click();
  }

  async clickOnLastDeleteButton() {
    await this.deleteButtons.last().click();
  }

  async countDeleteButtons() {
    return this.deleteButtons.count();
  }

  async getTitle() {
    return this.title.getAttribute('jhiTranslate');
  }
}

export class StoreUpdatePage {
  pageTitle = element(by.id('jhi-store-heading'));
  saveButton = element(by.id('save-entity'));
  cancelButton = element(by.id('cancel-save'));
  nameInput = element(by.id('field_name'));
  addressInput = element(by.id('field_address'));
  statusSelect = element(by.id('field_status'));
  createTimestampInput = element(by.id('field_createTimestamp'));
  updateTimestampInput = element(by.id('field_updateTimestamp'));

  async getPageTitle() {
    return this.pageTitle.getAttribute('jhiTranslate');
  }

  async setNameInput(name) {
    await this.nameInput.sendKeys(name);
  }

  async getNameInput() {
    return await this.nameInput.getAttribute('value');
  }

  async setAddressInput(address) {
    await this.addressInput.sendKeys(address);
  }

  async getAddressInput() {
    return await this.addressInput.getAttribute('value');
  }

  async setStatusSelect(status) {
    await this.statusSelect.sendKeys(status);
  }

  async getStatusSelect() {
    return await this.statusSelect.element(by.css('option:checked')).getText();
  }

  async statusSelectLastOption() {
    await this.statusSelect
      .all(by.tagName('option'))
      .last()
      .click();
  }

  async setCreateTimestampInput(createTimestamp) {
    await this.createTimestampInput.sendKeys(createTimestamp);
  }

  async getCreateTimestampInput() {
    return await this.createTimestampInput.getAttribute('value');
  }

  async setUpdateTimestampInput(updateTimestamp) {
    await this.updateTimestampInput.sendKeys(updateTimestamp);
  }

  async getUpdateTimestampInput() {
    return await this.updateTimestampInput.getAttribute('value');
  }

  async save() {
    await this.saveButton.click();
  }

  async cancel() {
    await this.cancelButton.click();
  }

  getSaveButton(): ElementFinder {
    return this.saveButton;
  }
}

export class StoreDeleteDialog {
  private dialogTitle = element(by.id('jhi-delete-store-heading'));
  private confirmButton = element(by.id('jhi-confirm-delete-store'));

  async getDialogTitle() {
    return this.dialogTitle.getAttribute('jhiTranslate');
  }

  async clickOnConfirmButton() {
    await this.confirmButton.click();
  }
}
