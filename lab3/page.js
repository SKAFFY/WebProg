

window.addEventListener("load", () => {

    const path = window.location.pathname

    let index = path.lastIndexOf("/") + 1;
    let pathName = path.substr(index);

    console.log(pathName)
    let elements = document.querySelectorAll(".headLink");

    elements.forEach((element) => {

        let index = element.href.lastIndexOf("/") + 1;
        let filename = element.href.substr(index);


        if (pathName === filename) {
            console.log(filename)
            element.style.backgroundColor = "lightBlue"
            element.style.borderRadius = "7px"
        }
    })
})