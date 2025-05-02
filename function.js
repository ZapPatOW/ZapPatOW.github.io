class myHeader extends HTMLElement{
    connectedCallback(){//for home site remove .html when uploading, replace when testing locally
        this.innerHTML = `
        <header>
            <nav class = "header">
                <ul>
                    <li><a href="./index">Home</a></li>
                    <li><a href="./Ideas">Ideas</a></li>
                    <li><a href="./InProgress">In Progress</a></li>
                    <li><a href="./Completed">Completed</a></li>
                    <li><a href="./Workspace">Workspace</a></li>
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
}