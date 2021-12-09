export const Toaster = ({message = ' ', type = 'error'}) => {
  let typ = type;
  let msg = message;
  toast.hideAll();
  toast.show(msg, {type: typ});
  return;
};
