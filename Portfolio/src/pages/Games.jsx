import React, { useState } from "react";


export default function Games() {
    const [inputValue, setInputValue] = useState("");
    const [output, setOutput] = useState("");

    const sendInfo = async () => {
        const timestamp = new Date().toISOString();

        try {
            const res = await fetch("https://api.eloguardians.xyz/input", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    message: inputValue,
                    time: timestamp
                })
            });

            if (!res.ok) throw new Error(`HTTP Error: ${res.status}`);

            const result = await res.json();

            if (result.isUnique) {
                setOutput(`Congrats!!!! that was unique message #${result.count}`);
            } else {
                setOutput("You should be disappointed that you are not unique");
            }

        } catch (err) {
            console.error("Error:", err);
            setOutput("Something went wrong. Try again.");
        }
    };
    return (
        <main>
            <div className="workspace">
                <h1>Uniqueness game:</h1><br />
                <p>Check to see if you have a unique message to leave:</p>
                <input type="text" placeholder="Say something unique" className="input" value={inputValue} onChange={(e) => setInputValue(e.target.value)}/>
                <button className="connect" onClick={sendInfo}>Check Uniqueness</button>
                <h3 className="output">{output}</h3>
            </div>
            <iframe 
                width="560" 
                height="315" 
                src="https://www.youtube.com/embed/O58bCGp7tuM"
                title="YouTube video player" 
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen>
            </iframe>
        </main>
    );
}
