'use strict';

(function() {
  'use strict';
  
  var snackbarContainer = document.querySelector('#submit-feedbacks-snackbar');
  var showSnackbarButton = document.querySelector('#submit-questions');
  
  var my_message = 'We will answer you as soon as possible.'

  var handler = function(event) {
	showSnackbarButton.style.backgroundColor = '#3f51b5';
  };
  showSnackbarButton.addEventListener('click', function() {
	'use strict';
	var form = document.getElementById('question1');
	if(form===null || form.value.length === 0){
		my_message = 'Please input something.';
	}
	else{
		my_message = 'Thanks for your feedbacks.'
	}
	showSnackbarButton.style.backgroundColor = '#' +
		Math.floor(Math.random() * 0xFFFFFF).toString(16);
	var data = {
	  message: my_message,
	  timeout: 2000,
	  actionHandler: handler,
	  actionText: 'OK'
	};
	 
	snackbarContainer.MaterialSnackbar.showSnackbar(data);
  });
}());

(function() {
  'use strict';
  
  var snackbarContainer = document.querySelector('#submit-feedbacks-snackbar');
  var showSnackbarButton = document.querySelector('#submit-feedbacks');
  
  var my_message = 'Thanks for your feedbacks.'


  var handler = function(event) {
	showSnackbarButton.style.backgroundColor = '#3f51b5';
  };
  showSnackbarButton.addEventListener('click', function() {
	'use strict';
	var form = document.getElementById('feed1');
	if(form===null || form.value.length === 0){
		my_message = 'Please input something.';
	}
	else{
		my_message = 'Thanks for your feedbacks.'
	}
	showSnackbarButton.style.backgroundColor = '#' +
		Math.floor(Math.random() * 0xFFFFFF).toString(16);
	var data = {
	  message: my_message,
	  timeout: 2000,
	  actionHandler: handler,
	  actionText: 'OK'
	};
	 
	snackbarContainer.MaterialSnackbar.showSnackbar(data);
  });
}());


(function(){
	var dialog = document.querySelector('dialog');
    var showDialogButton = document.querySelector('#add');
	var submmit = document.querySelector('#submit-add');
	
    if (! dialog.showModal) {	
      dialogPolyfill.registerDialog(dialog);
    }
    showDialogButton.addEventListener('click', function() {
	  document.getElementById('label-diaglog-add').innerHTML='I am thinking...';
      dialog.showModal();
    });
    dialog.querySelector('.close').addEventListener('click', function() {
      dialog.close();
    });
	var handler = function(event) {
		document.getElementById('label-diaglog-add').innerHTML='I am thinking...';
	};
	submmit.addEventListener('click', function(){
		var mytext = document.querySelector('#text-add').value;
		if(mytext.length === 0){
			var snackbarContainer = document.querySelector('#submit-add-snackbar');
			var data = {
				message: 'Click cancel if you have nothing to say',
				timeout: 2000,
				actionHandler: handler,
				actionText: 'Gotcha'
			};
			document.getElementById('label-diaglog-add').innerHTML='Anything will do...'
			snackbarContainer.MaterialSnackbar.showSnackbar(data);
		}
		else{
			console.log(mytext);
			dialog.close();
		}
	})
}());

