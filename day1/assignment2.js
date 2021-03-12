const my_int = 1;
const my_string = "thats my string";
const my_func = () => {};
const my_object = { name: 'object_name', value: 'object_value'};
const my_bool = false;

const list_of_vars = [my_int, my_string, my_func, my_object, my_bool];

list_of_vars.forEach((item) => {
  console.log(typeof(item));
});
