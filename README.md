1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
 
Answer: difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll-
getElementById :
    Purpose: Selects a single element by its id.
    Return value: A single DOM element (or null if not found).
   
getElementsByClassName :
    Purpose: Selects all elements with a given class.
    Return value: An HTMLCollection (live collection, updates if DOM changes).

querySelector / querySelectorAll :
    Purpose: Uses CSS selectors to select elements.
    Return values:
                querySelector → first matching element (or null)
                querySelectorAll → NodeList of all matching elements



  2. How do you create and insert a new element into the DOM?

 Answer: Creating and inserting elements in the DOM is a fundamental JavaScript task. Let’s go step by step,

   -Create a new element
-Insert the element into the DOM
 a) Append as the last child
 b) Insert before a specific element
 c) Using modern methods
    element.append(newDiv) → can append multiple nodes or text
    element.prepend(newDiv) → insert at the beginning
    element.after(newDiv) → insert after an element
    element.before(newDiv) → insert before an element

3. What is Event Bubbling? And how does it work?

Answer: Event Bubbling is the process by which an event triggered on a child element “bubbles up” through its ancestors in the DOM hierarchy, triggering the same type of event on parent elements unless stopped.
        In other words: the event starts from the deepest element and moves upward toward the root (document).
        All parent elements can respond to the event if they have listeners.
    How It Works:
    Event occurs on <button> (child).
    Event triggers click handler on the child.
    Event bubbles up to parent <div> and triggers its handler.
    Continues bubbling up to <body> and <html> if handlers exist.
    Continues bubbling up to <body> and <html> if handlers exist.

4. What is Event Delegation in JavaScript? Why is it useful?
Answer:Event Delegation is the practice of attaching a single event listener to a parent element instead of multiple listeners on individual child elements, and then using the event’s bubbling behavior to detect which child triggered the event.
      It relies on event bubbling: events triggered on children “bubble up” to the parent.
      You check the event.target to see which child was clicked.

    Why It’s Useful
     Better performance:
     Instead of attaching hundreds of listeners to child elements, you attach just one to the parent.
     Works with dynamically added elements:
     Newly created child elements automatically inherit the event handling via bubbling.
     Cleaner code:
     Less repetitive event listener code.
