// Reference: https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/Synchronous_and_Asynchronous_Requests
var request = new XMLHttpRequest();

request.onload = function(e) {
  if (request.readyState === 4){
    if (request.readyState === 200){
      console.log(request.responseText);
    } else{
      var jsonConfig = this.responseText;
      var jsonParse = JSON.parse(jsonConfig);
      document.getElementById("extension_name").innerHTML = jsonParse.name;
      document.getElementById("extension_version").innerHTML = 'Version: ' + jsonParse.version;
      document.getElementById("extension_description").innerHTML = jsonParse.description;
      console.log(request.statusText);
    }
  }
}
request.open('GET', chrome.extension.getURL('manifest.json'), true);
request.onerror = function (e) {
  console.error(request.statusText);
};

request.send(null);

