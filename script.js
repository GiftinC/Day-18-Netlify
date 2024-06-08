//function_create_lable
function lable_create(tagname, attrname, attrvalue, content) {
    var lable_ele = document.createElement(tagname);
    lable_ele.setAttribute(attrname, attrvalue);
    lable_ele.innerHTML = content;
    return lable_ele;
}
//function_create_break
function break_create() {
    var lable_break = document.createElement("br");
    return lable_break;
}
//function_create_input
function input_create(tagname, attrname, attrvalue, attrname1, attrvalue1) {
    var input_ele = document.createElement(tagname);
    input_ele.setAttribute(attrname, attrvalue);
    input_ele.setAttribute(attrname1, attrvalue1);
    return input_ele;
}
// first name
var lable_firstname = lable_create("label", "for", "name", "First Name");
var break_firstname1 = break_create();
var input_firstname = input_create("input", "type", "text", "id", "name");
var break_firstname2 = break_create();
// Middle name
var lable_middlename = lable_create("label", "for", "name", "Middle Name");
var break_middlename1 = break_create();
var input_middlename = input_create("input", "type", "text", "id", "name");
var break_middlename2 = break_create();
// Middle name
var lable_lastname = lable_create("label", "for", "name", "Last Name");
var break_lastname1 = break_create();
var input_lastname = input_create("input", "type", "text", "id", "name");
var break_lastname2 = break_create();
// Password
var lable_password = lable_create("label", "for", "password", "Password");
var break_password1 = break_create();
var input_password = input_create("input", "type", "password", "id", "password");
var break_password2 = break_create();
// Password
var lable_file = lable_create("label", "for", "file");
var break_file1 = break_create();
var input_file = input_create("input", "type", "file", "id", "file");
var break_file2 = break_create();
// Append
document.body.append(lable_firstname, break_firstname1, input_firstname, break_firstname2, lable_middlename, break_middlename1, input_middlename, break_middlename2,lable_lastname, break_lastname1, input_lastname, break_lastname2,lable_password,break_password1,input_password,break_password2,input_file,break_file1,input_file,break_file2);