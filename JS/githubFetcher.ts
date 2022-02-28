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
            tmpLink.setAttribute("target", "_blank");
            tmpLink.classList.add("link");
            tmpListItem.appendChild(tmpLink);
            tmpList.appendChild(tmpListItem);
        })).then(() => {
            const tmpHeader = document.createElement("h2");
            tmpHeader.innerHTML = "Created repositories";

            element?.appendChild(tmpHeader)
            element?.appendChild(tmpList);
            document.querySelector("#toRemove")?.remove();
        })
        .catch(error => {
            console.log(error);
            const tmpHeader = document.createElement("h2");
            tmpHeader.innerHTML = "Cannot fetch repositories";
            element?.appendChild(tmpHeader);
        });
}

document.addEventListener("DOMContentLoaded", function(event) { 
    if (document.readyState === 'interactive') {
        fetchRepositories();
    }
});