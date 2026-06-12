/**<div id="navBar">
    <ul>
        <li><a href="#">Profile</a></li>
        <li><a href="#">Home</a></li>
        <li><a href="#">My Friends</a></li>
        <li><a href="#">Messenger</a></li>
        <li><a href="#">My Pics</a></li>
    </ul>
</div>*/


/*Using Javascript, in the <div>, change the value of the id attribute from navBar to socialNetworkNavigation, using the setAttribute method.*/

const div = document.getElementById("navBar")
div.setAttribute("id", "socialNetworkNavigation")

/*We are going to add a new <li> to the <ul>.
First, create a new <li> tag (use the createElement method).
Create a new text node with “Logout” as its specified text.
Append the text node to the newly created list node (<li>).
Finally, append this updated list node to the unordered list (<ul>), using the appendChild method.*/

const listItem = document.createElement("li");
const list = document.querySelector("ul");
const textnode = document.createTextNode("Logout");
listItem.appendChild(textnode);
list.appendChild(listItem);


/*Use the firstElementChild and the lastElementChild properties to retrieve the first and last <li> elements from their parent element (<ul>). Display the text of each link. (Hint: use the textContent property). */

const firstItem = list.firstElementChild;
const lastItem = list.lastElementChild;

console.log("First item:", firstItem.textContent);
console.log("Last item:", lastItem.textContent);