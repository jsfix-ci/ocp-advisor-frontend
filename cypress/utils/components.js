const TOOLBAR = 'div[id="ins-primary-data-toolbar"]';
const CHIP_GROUP = 'div[data-ouia-component-type="PF4/ChipGroup"]';
const CHIP = '[data-ouia-component-type="PF4/Chip"]';
const ROW =
  '[data-ouia-component-type="PF4/TableRow"]:not([class~="pf-c-table__expandable-row"])';
const PAGINATION = 'div[data-ouia-component-type="PF4/Pagination"]';
const PAGINATION_BOTTOM = '.pf-m-bottom';
const PAGINATION_MENU =
  'div[data-ouia-component-type="PF4/PaginationOptionsMenu"]';
const DROPDOWN = '[data-ouia-component-type="PF4/Dropdown"]';
const MODAL = '[data-ouia-component-type="PF4/ModalContent"]';
const CHECKBOX = '[data-ouia-component-type="PF4/Checkbox"]';
const TEXT_INPUT = '[data-ouia-component-type="PF4/TextInput"]';
const DROPDOWN_TOGGLE = '[data-ouia-component-type="PF4/DropdownToggle"]';
const DROPDOWN_ITEM = '[data-ouia-component-type="PF4/DropdownItem"]';
const TBODY = 'tbody[role=rowgroup]';
const TOOLBAR_FILTER = '.ins-c-primary-toolbar__filter';
const TABLE = 'table';
const TABLE_HEADER = 'thead';
const ROWS_TOGGLER = `${TABLE_HEADER} .pf-c-table__toggle`;
const TITLE = '[data-ouia-component-type="PF4/Title"]';
const ouiaId = (id) => `[data-ouia-component-id="${id}"]`;

export {
  ouiaId,
  TOOLBAR,
  CHIP_GROUP,
  CHIP,
  ROW,
  PAGINATION,
  PAGINATION_BOTTOM,
  PAGINATION_MENU,
  DROPDOWN,
  MODAL,
  CHECKBOX,
  TEXT_INPUT,
  DROPDOWN_TOGGLE,
  DROPDOWN_ITEM,
  TBODY,
  TOOLBAR_FILTER,
  TABLE,
  TABLE_HEADER,
  ROWS_TOGGLER,
  TITLE,
};
