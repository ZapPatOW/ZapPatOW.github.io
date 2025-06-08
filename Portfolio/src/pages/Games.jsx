import React from "react";

export default function Games() {
    return (
        <main>
            <div className="workspace">
                <h1>Uniqueness game:</h1><br />
                <p>Check to see if you have a unique message to leave:</p>
                <input type="text" placeholder="Say something unique" class="input" />
                <button class="connect" onclick="sendInfo()">Check Uniqueness</button>
                <h3 class="output"></h3>
            </div>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/O58bCGp7tuM"
                title="YouTube video player" frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen>
            </iframe>
        </main>
    );
}