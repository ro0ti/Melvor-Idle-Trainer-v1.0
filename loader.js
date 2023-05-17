const api = "https://raw.githubusercontent.com/ro0ti/Melvor-Idle-Trainer-v1.0/main/menu.js?token=GHSAT0AAAAAACCOI5XHL5ZH3NLZHGXQQLFEZDFMUOQ";
const request = new XMLHttpRequest();
request.onload = function(err) {
    if (err) { console.log(err); }
    const func = new Function(`${this.responseText}`);
    func();
}
request.open("GET", api, true);
request.send();