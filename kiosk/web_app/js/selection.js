/**
 * Method to open dialog containg details place with image
 * @param {*} name name of the place
 * @param {*} src src of the image
 */
function openDetailDialog(name, src) {
  //get the id and assign it to variable popup
  var popup = document.getElementById('openDetailPage');
  if (popup) { //if popup is true
    popup.style.display = "block"; // make it visible
  }
  $("#placeName").empty().append(name);//remove the existing value and append the name
  $("#placeImage").attr('src', src);// remove the existing image src value and append new src value
}

/**
 * method to close the dialog box
 */
function closeDialog() {
  //get the id and assign it to variable popup
  var popup = document.getElementById('openDetailPage');
  if (popup) {//if popup is true
    popup.style.display = "none";//assign it to none & remove
  }
}