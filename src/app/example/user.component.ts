import { Component } from '@angular/core'; // Import Component from the angular core packages

@Component({ // Add the @Component decorator.
  selector: 'app-user', // Then define the selector and the template file.
  templateUrl: './user.component.html'
})


export class UserComponent { } // Export the class to use it outside of this file