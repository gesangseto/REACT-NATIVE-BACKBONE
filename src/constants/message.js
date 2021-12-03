export const error = {
  unathorized: {
    message: "Unathorized Access.",
    type: "error",
  },
  invalid_menu: {
    message: "Sorry, You dont have permission to this menu.",
    type: "error",
  },
  already_full: {
    message: "Cannot add more item, quantity is already full.",
    type: "error",
  },
  not_active_or_sold: {
    message: "Cannot add this item, this item not active or has sold.",
    type: "error",
  },
  cannot_level_1: {
    message: "Cannot process this item, this item is level 1.",
    type: "error",
  },
  cannot_more_than_1: {
    message: "Cannot process more than 1 process.",
    type: "error",
  },
  have_non_serial_child: {
    message: "Cannot process this item, this item have nonserial child.",
    type: "error",
  },
  need_fill_form: {
    message: "Please fill form first.",
    type: "error",
  },
  change_operation: {
    message: "Cannot change operation, please remove list first.",
    type: "error",
  },
  change_warehouse: {
    message: "Cannot change warehouse, please remove list first.",
    type: "error",
  },
  diff_packaging: {
    message: "Cannot add different packaging level.",
    type: "error",
  },
  diff_batch: {
    message: "Cannot add different Batch No.",
    type: "error",
  },
  diff_warehouse: {
    message: "Cannot add different warehouse.",
    type: "error",
  },
  inactive_serial: {
    message: "Cannot add this item, this item is inactive.",
    type: "error",
  },
  active_serial: {
    message: "Cannot add this item, this item is active.",
    type: "error",
  },
  level_1_ns: {
    message: "Cannot add this item, this item level 1 non-serial.",
    type: "error",
  },
  false_stock: {
    message: "Cannot add this item.",
    type: "error",
  },
  must_level_1: {
    message: "Error, Can only process level 1.",
    type: "error",
  },
  not_sold: {
    message: "Error, Stock not sold'.",
    type: "error",
  },
  need_param: {
    message: "Error, Need 'Params'.",
    type: "error",
  },
  have_parent: {
    message: "Error, This item have a parent.",
    type: "error",
  },
  need_one_input: {
    message: "Error, Must set minimal 1 data to continue this process.",
    type: "error",
  },
  not_on_list: {
    message: "Please scan / input data from in the list.",
    type: "error",
  },
  need_all_scanned: {
    message: "Please scan / input all SN data in the list.",
    type: "error",
  },
  serial_duplicate: {
    type: "error",
    message: "Error, serial is duplicate!",
  },
  batch_duplicate: {
    type: "error",
    message: "Error, batch is duplicate!",
  },
  need_warehouse: {
    type: "error",
    message: "Error, warehouse is required!",
  },
  already_scanned: {
    type: "error",
    message: "Error, barcode already scanned!",
  },
  quantity_not_match: {
    type: "error",
    message: "Error, quantity did not match!",
  },
  packaging_not_match: {
    type: "error",
    message: "Error, packaging did not match!",
  },
  stock_not_active: {
    type: "error",
    message: "Error, stock is not active!",
  },
  stock_not_found: {
    type: "error",
    message: "Error, stock not found!",
  },
  stock_has_sold: {
    type: "error",
    message: "Error, stock is already sold!",
  },
};
