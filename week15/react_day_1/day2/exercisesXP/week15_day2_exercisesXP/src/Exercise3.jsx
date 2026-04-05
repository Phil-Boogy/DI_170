import { Component } from 'react'
import './Exercise.css'

// In a separate Javascript file, named Exercise3.js, create a new Class Component called Exercise that contains some HTML tags.
// create a < h1 > tag and set its color to red, and the background color to lightblue.
// create a paragraph, a link, a form, an image and a list.
// Import Exercise component to the App.js file and display it.


const style_header = {
    color: "white",
    backgroundColor: "DodgerBlue",
    padding: "10px",
    fontFamily: "Arial"
};

class Exercise extends Component {
    render() {
        return (
            <>
                <h1 style={style_header}>Here's my H1 tag</h1>
                <p className='para'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ac dignissim sem, pretium tincidunt justo. Donec at justo viverra, molestie tellus blandit, suscipit mauris. Vivamus non nulla facilisis leo sollicitudin laoreet vitae eget eros. Aenean vel sapien turpis. Vestibulum sed neque velit. Nam ex purus, dignissim facilisis massa a, consequat lobortis orci. In diam dui, convallis nec eros eget, commodo aliquam mi.</p>
                <form>
                    <label for="input">Here's a form</label><br />
                    <input type="text" id="input" value="" />
                    <input type="submit" value="Submit" />
                </form>
                <a href='https://en.wikipedia.org/wiki/Main_Page'>Wikipedia</a>
                <div style={{ textAlign: 'center' }}>

                    <img width="250px" align="center" src='https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Artemis_II_Launch_%28NHQ202604010105%29.jpg/250px-Artemis_II_Launch_%28NHQ202604010105%29.jpg' />
                </div>
                <ul>
                    <li>1</li>
                    <li>2</li>
                    <li>3</li>
                    <li>4</li>
                    <li>5</li>
                </ul>
            </>
        );
    };
};

export default Exercise