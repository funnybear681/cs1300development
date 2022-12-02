# Development

### Link to Deployed Website
https://funnybear681.github.io/cs1300development>

### Goal and Value of the Application
This application is a jersey website. For the purposes of brevity, and since I wrote my own dataset, there are only 12 jerseys available for purchase, and all of them are either on the Red Sox or Yankees. 

### Usability Principles Considered
To make the website more usable, I used CSS to make the site reactive so that the display on a phone, tablet or other smaller screen would still be nice. Each jersey card is the same size, with roughly the same image size to make it easier on the eyes. Finally, one change I made that increases usability is to space out the filtering/sorting options. Previously, they were all cluttered together and it was sort of difficult to see what was going on, but I 1) moved them to the top so they are more visible and 2) added spacing using CSS, so it is much easier now.

### Organization of Components
In my App Component, I have a "Jerseys" component and a "Cart" component. Within the Cart component, we have a cart item component, and within the Jerseys component, we have Jersey Cards.

### How Data is Passed Down Through Components
Data is passed through components in the form of both jersey data and functions as props. For example, I pass jersey data from the App component to the jerseys component, then, to each jersey card, I pass the item, and the key (which we use for default sorting). We also pass the add to cart function this way. For the cart, we pass the cart object itself into the cart, so we can update it using usestate, then we pass the name of the item into the cartitem component so that it can display correctly.

### How the User Triggers State Changes
The user can trigger state changes in a few ways. The most obvious one is to add or remove an item to the cart, which sets the state of the cart. The other is the filtering and sorting categories. I used state for these filters so that, when switching teams (Red Sox to Yankees or vice versa), the price sorting and active/retired status remains the same. The same is true for switching between active/retired players. You will still only look at whichever team you selected.