# jquery-movediv
Moves the html element to target element even if source the source element loaded dynamically. This plugin created for AngularJs bindings.

Options
-------

`target` - target element selector - string (required)

`after` - move the source element after the target element - boolean

`before` - move the source element before the target element - boolean

`appendTo` - insert source element to the end of the target element - boolean

`prependTo` - insert source element to the beginning of the target element - boolean

# Usage : 
    $('#divId').moveDiv({
      target: '.rightBlock',
      prependTo: true   
    });
