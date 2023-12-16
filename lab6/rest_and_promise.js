// import * as alertify from '../lab7/alertify.min'

window.addEventListener("load", () => {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(json => display(json))
        .catch(err => alertify.alert("Нет подключения!"))
})

function getArticleDiv(articleJson)  {
    let article = document.createElement("div")
    let articleName  = document.createElement("div")
    let articleText  = document.createElement("div")

    articleName.classList.add("fetchedArticleText")
    articleName.textContent = articleJson.title

    articleText.classList.add("fetchedArticleText")
    articleText.textContent = articleJson.body

    article.classList.add("fetchedArticle")

    article.appendChild(articleName)
    article.appendChild(articleText)

    return article
}



function display(jsonArticles) {
    const articlesDiv = document.querySelector(".fetchedArticles");
    let loaderContainer = document.querySelector('.loader-container');
    loaderContainer.style.display = 'none';
    if (articlesDiv) {
        articlesDiv.display = "flex";
        articlesDiv.flexDirection = "column";
        for (let article in jsonArticles) {
            //if(article > 3 ){break}
            let articleSection = getArticleDiv(jsonArticles[article])
            console.log(articleSection)
            articlesDiv.appendChild(articleSection)
        }
    }
}