/**
 * You can copy the function and paste into your source code or making a library for ease of scalability
 * @param {object} menu parent menu to pass in, leave blank if this is the parent one
 * @param {string} menuName name of the menu
 * @param {object} menuObj current menu object
 * @returns Apps Script Menu Object
 */
function createMenu(menu=null, menuName, menuObj) {
    let ui = SpreadsheetApp.getUi();
    if (!menu) menu = ui.createMenu(menuName);
    let createSubMenu = (parentMenu, subMenuName, subMenuObj) => {
      let subMenu = ui.createMenu(subMenuName);
      for (let item in subMenuObj) {
        let subMenuItems = subMenuObj[item];
        if (typeof subMenuItems == 'string') {
          subMenu.addItem(item, subMenuObj[item])
        } else {
          createSubMenu(subMenu, item, subMenuItems)
        }
      }
      if (parentMenu) parentMenu.addSubMenu(subMenu)
      if (parentMenu.toString() !== menu.toString()) menu.addSubMenu(parentMenu)
    }
    for (let item in menuObj) {
      let subMenuItems = menuObj[item];
      if (typeof subMenuItems == 'string') {
        menu.addItem(item, menuObj[item])
      } else {
        createSubMenu(menu, item, subMenuItems)
      }
    }
    menu.addToUi();
  }