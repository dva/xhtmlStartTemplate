jQuery.noConflict();

jQuery(document).ready(function($) {
	cl('Hello world');
});

/**
 * Shortcut for console.log()
 * @param value
 */

function cl(value) {
	console.log(value);
}

/**
 * Operation time tracker 
 */

function TimeTracker(){  
    console.time("MyTimer");  
    for(x=5000; x > 0; x--){}  
    console.timeEnd("MyTimer");  
}
