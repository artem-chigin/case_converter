let some_text_area = document.querySelector("textarea");

document.getElementById("upper-case").addEventListener("click", function() {
   some_text_area.value = some_text_area.value.toUpperCase();
});

document.getElementById("lower-case").addEventListener("click", function() {
    some_text_area.value = some_text_area.value.toLowerCase();
});

document.getElementById("proper-case").addEventListener("click", function() {
    let newStr = some_text_area.value.split(' ')
    newStr = newStr.map(w => w[0].toUpperCase() + w.substring(1).toLowerCase())
    newStr = newStr.join(' ')
    some_text_area.value = newStr;
});

document.getElementById("sentence-case").addEventListener("click", function() {

    let str = some_text_area.value.split('. ')

    str = str.map(w => w.substring(0, 1).toUpperCase() + w.substring(1).toLowerCase())
    some_text_area.value = str.join(". ");

});

document.getElementById("save-text-file").addEventListener("click", function () {
    let file_name = "text.txt"
    let tempLink = document.createElement("a");
    let textArea = some_text_area.value;
    let taBlob = new Blob([textArea], {type: 'text/plain'});

    tempLink.setAttribute('href', URL.createObjectURL(taBlob));
    tempLink.setAttribute('download', file_name);
    tempLink.click();

    URL.revokeObjectURL(tempLink.href);
});
