const element: Element | null = document.querySelector("#toFill");

const fetchRepositories = () => {
    const tmpList = document.createElement("ul");

    const requestOptions: any = {
        method: 'GET',
        redirect: 'follow'
    };
    
    fetch("https://api.github.com/users/StrikerSK/repos", requestOptions)
        .then(response => response.json())
        .then(result => result.forEach((item: {name: string, html_url: string}) => {
            const tmpListItem = document.createElement("li");
            const tmpLink = document.createElement("a");
            tmpLink.innerHTML = item.name;
            tmpLink.setAttribute("href", item.html_url);
            tmpLink.classList.add("link");
            tmpListItem.appendChild(tmpLink);
            tmpList.appendChild(tmpListItem);
        }))
        .catch(error => console.log('Error', error));

    element.appendChild(tmpList);
}

document.addEventListener("DOMContentLoaded", function(event) { 
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


