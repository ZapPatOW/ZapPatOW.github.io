class myHeader extends HTMLElement{

    connectedCallback(){//for home site
        this.innerHTML = `<header>
            <nav class = "navbar">
                <ul>
                    <li><a href="./index.html">Home</a></li>
                    <li><a href="./pages/ideas.html">Ideas</a></li>
                    <li><a href="./pages/inProgress.html">In Progress</a></li>
                    <li><a href="./pages/completed.html">Completed</a></li>
                </ul>
            </nav>
        </header>`;
    }
    
}
class myHeader2 extends HTMLElement{//for pages in pages folder

    connectedCallback(){
        this.innerHTML = `<header>
            <nav class = "navbar">
                <ul>
                    <li><a href="../index.html">Home</a></li>
                    <li><a href="ideas.html">Ideas</a></li>
                    <li><a href="inProgress.html">In Progress</a></li>
                    <li><a href="completed.html">Completed</a></li>
                </ul>
            </nav>
        </header>`;
    }
    
}

class myFooter extends HTMLElement{

    connectedCallback(){
        this.innerHTML = `
            <h1 class = "title">About me</h1>
            <p class = footer>
                Name: Patrick Meinen<br>
                Email: patricklmeinen@gmail.com<br>
                Programming languages: Python, Java, C, HTML, JavaScript, CSS<br>
                Certifications: <br>
            </p>`;
    }
    
}

customElements.define('my-header',myHeader);
customElements.define('my-header2',myHeader2);
customElements.define('my-footer',myFooter);