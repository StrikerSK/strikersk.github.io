var element = document.querySelector("#toFill");
var fetchRepositories = function () {
    var tmpList = document.createElement("ul");
    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
    };
    fetch("https://api.github.com/users/StrikerSK/repos", requestOptions)
        .then(function (response) { return response.json(); })
        .then(function (result) { return result.forEach(function (item) {
        var tmpListItem = document.createElement("li");
        var tmpLink = document.createElement("a");
        tmpLink.innerHTML = item.name;
        tmpLink.setAttribute("href", item.html_url);
        tmpLink.classList.add("link");
        tmpListItem.appendChild(tmpLink);
        tmpList.appendChild(tmpListItem);
    }); })["catch"](function (error) { return console.log('Error', error); });
    element.appendChild(tmpList);
};
document.addEventListener("DOMContentLoaded", function (event) {
    if (document.readyState === 'interactive') {
        fetchRepositories();
    }
});
// document.addEventListener('readystatechange',function (ev) {
//     if (document.readyState === 'interactive') {
//         if (element) {
//             fetchRepositories();
//         }
//     }
// })
