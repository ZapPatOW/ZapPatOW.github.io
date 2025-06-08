import React from "react";

export default function Survey() {
    return (
        <main>
			<h1 id="title">Survey</h1>
			<p id="description">Please provide feedback on your experience here: 
                (note at the moment this doesn't go anywhere if you have actual feedback email me)</p>
			<form id="survey-form">
				<label htmlFor="name" id="name-label">
                    Name: <input required id="name" type="text" placeholder="Name" />
                </label>
				<br />
				<label htmlFor="email" id="email-label">
                    Email: <input required id="email" placeholder="Email" type="email" />
                </label>
				<br />
				<label htmlFor="rating" id="number-label">
                    Rating: <input id="number" placeholder="Rating" type="number" min="0" max="9" />
                </label>
				<br />
				<select id="dropdown">
					<option>Hi</option>
					<option>Hi2</option>
					<option>Hi3</option>
				</select>
				<br />
                <label>
				    <input type="radio" name="button" value="button1" />Button1
                </label>
                <label>
				<input type="radio" name="button" value="button2" />Button2
                </label>
				<br />
                <label>
				<input type="radio" name="option" value="option1" />Option1
                </label>
                <label>
				<input type="radio" name="option" value="option2" />Option2
                </label>
				<br />
                <label>
				<input type="checkbox" name="test" value="test" />test
                </label>
                <label>
				<input type="checkbox" name="test2" value="test2" />test2
                </label>
				<br />
				<textarea></textarea>
				<br />
				<button id="submit" type="submit">submit</button>
			</form>
		</main>
    );
}