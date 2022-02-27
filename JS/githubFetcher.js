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
    }); }).then(function () {
        var _a;
        var tmpHeader = document.createElement("h2");
        tmpHeader.innerHTML = "Created repositories";
        element === null || element === void 0 ? void 0 : element.appendChild(tmpHeader);
        element === null || element === void 0 ? void 0 : element.appendChild(tmpList);
        (_a = document.querySelector("#toRemove")) === null || _a === void 0 ? void 0 : _a.remove();
    })["catch"](function (error) { return console.log('Error', error); });
};
document.addEventListener("DOMContentLoaded", function (event) {
    if (document.readyState === 'interactive') {
        fetchRepositories();
    }
});
