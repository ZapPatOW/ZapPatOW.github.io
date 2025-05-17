class myHeader extends HTMLElement{
    connectedCallback(){//for home site remove .html when uploading, replace when testing locally (find a way to automate)
        this.innerHTML = `
        <header>
            <nav class = "header">
                <ul>
                    <li><a href="./index.html">Home</a></li>
                    <li><a href="./projects.html">Projects</a></li>
                    <li><a href="./gamespace.html">Gamespace</a></li>
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

    if(inner && out){ //check for valid input and output
    }
    else{
        console.error("Input or Output element not found");
        return;
    }
    
    const data = inner.value;
    const timestamp = new Date().toISOString();
    fetch("https://api.eloguardians.xyz/input", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            message: data,
            time: timestamp
        })
    })
    .then((res) => {
        if(!res.ok){
            throw new Error(`HTTP Error! Status: ${res.status}`);
        }
        return res.json();
    })
    .then((result) => {
        if(result.isUnique){
            out.innerHTML = `<p>Congrats!!!! that was unique message #${result.count}</p>`;
        }
        else{
            out.innerHTML = `<p>You should be disappointed that you are not unique</p>`;
        }
        
        console.log("Server response:", result)
    })
    .catch((err) => {
        console.error("Error", err)
    })
    
}
