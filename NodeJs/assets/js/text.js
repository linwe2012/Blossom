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
	var showDialogButton_small = document.querySelector('#add-small');
	var submmit = document.querySelector('#submit-add');
	var text_reset = document.querySelector('#reset-add');
	var label = document.getElementById('icon-fab-add');
	var label_small = document.getElementById('icon-fab-add-small');
	var current_button;
	var current_label;
	
	
	
    if (! dialog.showModal) {	
      dialogPolyfill.registerDialog(dialog);
    }
    showDialogButton.addEventListener('click', function() {
	  document.getElementById('label-diaglog-add').innerHTML='I am thinking...';
	  current_button=showDialogButton;
	  current_label=label;
      dialog.showModal();
    });
	showDialogButton_small.addEventListener('click', function() {
	  document.getElementById('label-diaglog-add').innerHTML='I am thinking...';
	  current_button=showDialogButton_small;
	  current_label=label_small;
      dialog.showModal();
    });
    dialog.querySelector('.close').addEventListener('click', function() {
      dialog.close();
    });
	text_reset.addEventListener('click', function() {
	  document.getElementById('text-add').value='';
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
			current_label.innerHTML = 'check';
			current_button.style.backgroundColor='#ff4081';
			setTimeout(function(){current_label.innerHTML = 'add';
			current_button.style.backgroundColor='#ffeb3b'
			},2000);
			console.log(mytext);
			dialog.close();
		}
	})
}());


(function(){
	$('.my-simulate-tab').each(function(index,element){
		var target = $(element).attr("name");
		console.log('gotone type = ' + typeof element + '   '+ $(element));
		$(element).click(function(){
			var targets = target.split('#');
			var i=1;
			targets.splice(0,1);
			console.log(targets);
			for(var step of targets){
				//setTimeout(function(){document.getElementById(step).click();console.log('timeout:'+i+step);}, 10*i);
				//i+=10;
				document.getElementById(step).click();
			}
			
		})
	})
}())

var i=11;
document.querySelector('#progressbar1').addEventListener('mdl-componentupgraded', 
    function() {
    this.MaterialProgress.setProgress(11);
});
document.querySelector('#more1').addEventListener('click', 
    function() {
		i+=19;
		if(i>=119){
			i=0;
		}
		else if(i>100){
			i=100;
		}
    document.querySelector('#progressbar1').MaterialProgress.setProgress(i);
});

(function(){
	var ifsending=0;
	var send = document.querySelector('#dandelion-send');
	var sending = document.querySelector('#dandelion-sending')
	send.addEventListener('click', 
    function() {
		console.log('click');
		send.style.display='none';
		sending.style.display='';
		setTimeout(function(){
				sending.style.display='none';
				send.style.display='';
			},2000)
	});
}() )


