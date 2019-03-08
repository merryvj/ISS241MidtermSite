var activeDropdown = {};//create an object for the active dropdown
        
        //add an event listener to the element with the ID dropdown menu, and when we click on it, run this function showDropdown
        document.getElementById('dropdown-menu').addEventListener('click',showDropdown);
        
        
        //the showDropdown function
        function showDropdown(event){
            //first lets test a condition.  If the activeDropdown id ('dropdown-menu') is there, and is not equal to the event.target.id, remove the active class
            //the active class will show/hide our dropdown -see css
          if (activeDropdown.id && activeDropdown.id !== event.target.id) {
            activeDropdown.element.classList.remove('active');
              //let's see how this works, when?
              //console.log('active removed');
          }
            
          //checking if a list element was clicked, changing the inner button value
            if (event.target.tagName === 'LI') {
                //if you click on an LI tag, then make the innerHTML of that LI, the inner html of the activeDropdown button at the top of the UL
                activeDropdown.button.innerHTML = event.target.innerHTML;
              
                //what is this value, check and log
                //console.log(activeDropdown.button.innerHTML);//'selection'
                //this where we are getting the 'One,''Two','Three' as values.
                //these values match the strings in the 'id' parameter of our panel class
                //test that against the ID of div with the class panel
            
                //now loop through the List Items, and see if each contains "check" class, and if it does, remove that class
                for (var i=0;i<event.target.parentNode.children.length;i++){
                    if (event.target.parentNode.children[i].classList.contains('check')) {
                    event.target.parentNode.children[i].classList.remove('check');
                    }
                }
                //timeout here so the check is only visible after opening the dropdown again.  The check just shows us which panel we have picked
                    window.setTimeout(function(){
                  event.target.classList.add('check');
                     },500)
                }//end if(event.target.tagName === 'LI')
            
            //the code below actually applies the active class
            //now loop through the children of 'dropdown-menu' again
            for (var i = 0;i<this.children.length;i++){
                //and if it's our dropdown-selection ul
            if (this.children[i].classList.contains('dropdown-selection')){
                //get the ID and store it in the active dropdown object
                activeDropdown.id = this.id;
                //get each child and store it in the dropdown object
                activeDropdown.element = this.children[i];
                //and finally, add the 'active' class
                this.children[i].classList.add('active');
             }
                
            //adding the dropdown-button to our object
            else if (this.children[i].classList.contains('dropdown-button')){
              activeDropdown.button = this.children[i];
            }
          }
        }//end of the showDropdown function
        
        //finally we want to make sure that dropdown closes if we click anywhere else on the page, so bind an event to the window
        window.onclick = function(event) {
            //if we're just clicking anywhere, and not on the menu, target class list doesn't contain the 'dropdown-button' class
          if (!event.target.classList.contains('dropdown-button')) {
              //take away that active class, menu goes away
            activeDropdown.element.classList.remove('active');
          }
        }
        
        
        
    