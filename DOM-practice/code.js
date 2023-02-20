let access = document.getElementById('code9');  // You need to use this method to grab a web page's element by id.
                                                // This gives you an element object.
let code = access.innerHTML;                    // This method is used to get the content from an element.

code += ' midnight';

alert(code);