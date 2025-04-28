class myHeader extends HTMLElement{
    connectedCallback(){//for home site
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
/*class myHeader2 extends HTMLElement{//for pages in pages folder

    connectedCallback(){
        this.innerHTML = `
        <header>
            <nav class = "header">
                <ul>
                    <li><a href="../Home">Home</a></li>
                    <li><a href="../Ideas">Ideas</a></li>
                    <li><a href="../InProgress">In Progress</a></li>
                    <li><a href="../Completed">Completed</a></li>
                    <li><a href="../Workspace">Workspace</a></li>
                </ul>
            </nav>
        </header>`;
    }
    
}
customElements.define('my-header2',myHeader2);*/
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