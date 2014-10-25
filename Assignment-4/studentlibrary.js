function ajaxRequest(URL, Type, Parameters){
  
  var request = new XMLHttpRequest();

  //from Ajax lecture

  function urlString(param) {
    var str = [];
    for (var key in param) {
      var s = encodeURIComponent(key) + '=' + encodeURIComponent(param[key]);
      str.push(s);
    }
    return str.join('&');
  }

  if (Type=='POST'){
    request.open('POST', URL, false);
    request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    request.send(urlString(Parameters));
  }

  var getURL = URL + '?' + urlString(Parameters);

  if (Type=='GET'){
    request.open('GET', getURL, false);
    request.send();
  }

    if (request.status == 200){
      var success=true;
    }
    else {
      success=false;
    }

  return {success: success, code: request.status, codeDetail: request.statusText, response: request.responseText};

}


function localStorageExists() {
    //code to test if local storage exists
    if (//can write and read from local storage){
      return true; 
    }
    return false;
}
