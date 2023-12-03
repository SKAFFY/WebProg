class LocalStorageService {
    static add(key, value) {
        try {
            localStorage.setItem(key, JSON.stringify(value));
        } catch (e) {
            console.error({ error: JSON.stringify(e, Object.getOwnPropertyNames(e)), message: `Error when adding a key ${key} to localStorage` });
        }
    }

    static get(key) {
        try {
            return JSON.parse(localStorage.getItem(key));
        } catch (e) {
            console.error({ error: JSON.stringify(e, Object.getOwnPropertyNames(e)), message: `Error when getting a key ${key} from localStorage` });
        }
    }

    static remove(key) {
        localStorage.removeItem(key);
    }
}





let br = document.createElement("br");
let button;
window.addEventListener("load", () => {
    const creation = document.querySelector(".createArticle");
    creation.display = "flex";
    creation.flexDirection = "row";
    if (creation) {
        // localStorage.clear();
        let myform = document.createElement("form");
        myform.display = "flex";
        myform.flexDirection = "row";

        let textInput = document.createElement("input")
        textInput.setAttribute("type", "text");
        textInput.setAttribute("name", "FullName");
        textInput.setAttribute("placeholder", "Full Name");

        let s = document.createElement("input");
        s.setAttribute("type", "submit");
        s.setAttribute("value", "Submit");
        button = s

        myform.appendChild(textInput)
        myform.appendChild(s)

        creation.appendChild(myform)
        displayArticles()
        button.addEventListener("click", (event) => {
            event.preventDefault()
            console.log(textInput.value)
            if (textInput.value !== "") {
                saveArticle(textInput.value)
            }
            displayArticles()
        })
    }
})

function saveArticle(article) {


    let storedArticles = LocalStorageService.get("articles") || []

    storedArticles.push(article)

    LocalStorageService.remove("articles")
    LocalStorageService.add("articles", storedArticles)

}

function displayArticles() {
    let storedArticles = LocalStorageService.get("articles")
    console.log(storedArticles)
    const created = document.querySelector(".createdArticles");
    created.innerHTML = "";
    created.display = "flex";
    created.flexDirection = "column";
    for (let article in storedArticles) {
        let articleSection = document.createElement("div")
        articleSection.textContent = storedArticles[article]
        created.appendChild(articleSection)
    }
}




