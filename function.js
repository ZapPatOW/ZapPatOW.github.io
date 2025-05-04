class myHeader extends HTMLElement{
    connectedCallback(){//for home site remove .html when uploading, replace when testing locally
        this.innerHTML = `
        <header>
            <nav class = "header">
                <ul>
                    <li><a href="./index.html">Home</a></li>
                    <li><a href="./Ideas.html">Ideas</a></li>
                    <li><a href="./InProgress.html">In Progress</a></li>
                    <li><a href="./Completed.html">Completed</a></li>
                    <li><a href="./Workspace.html">Workspace</a></li>
                </ul>
            </nav>
        </header>`;
    }
}
customElements.define('my-header',myHeader);
class myFooter extends HTMLElement{
    connectedCallback(){
        this.innerHTML = `
        <div class = footer>
            <h1 class = "title">About me</h1>
            <p>
                Name: Patrick Meinen<br>
                Email: patricklmeinen@gmail.com<br>
                Programming languages: Python, Java, C, HTML, JavaScript, CSS, SQLite<br>
                Certifications: Back-End Developer - Mimo.org
            </p>
        </div>`;
    }
}
customElements.define('my-footer',myFooter);



function sendInfo(){
    const inner = document.querySelector(".input");
    const out = document.querySelector(".output");
    out.innerHTML = inner.value;
    
    const data = inner.value;
    fetch("http://192.168.1.51:3000/input", {
        method: "POST",
        headers: {"Content-Type": "application/json",},
        body: JSON.stringify({message: data}),
    })
    .then((res) => res.json())
    .then((result) => console.log("Server response:", result))
    .catch((err) => console.error("Error", err));
    
}
