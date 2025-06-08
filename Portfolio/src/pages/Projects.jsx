import React from "react";

export default function Projects() {
    return (
        <main>
            <div class="projects">
                <div class="ideas">
                    <h1>This is my Ideas List</h1>
                    <ul>
                        <li>Esports Statistics</li>
                        <li>Auto Bracket filler</li>
                    </ul>
                </div>
                <div class="inProgress">
                    <h1>This is my In Progress List</h1>
                    <ul>
                        <li>Website, frontend and backend</li>
                        <li>Overwatch Vision AI</li>
                    </ul>
                </div>
                <div class="completed">
                    <h1>This is my Completed Projects List</h1>
                    <ul>
                        <li>Linux Servers: Setup a Terraria and Teamspeak server</li>
                        <li>Configure website with CloudFlare to host website @ EloGuardians.xyz <a
                            href="https://www.eloguardians.xyz" id="cLink">Right here!</a></li>
                    </ul>
                </div>
            </div>
        </main>
    );
}