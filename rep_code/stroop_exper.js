$(function(){
  
  var CLASSIC_NUM_TRIALS = 4; //96;
  var WM_NUM_TRIALS = 10; //120;
  var NUM_BLOCKS = 4;
  
  // [word1, patch, word2, ?, congruency]
  var WM_TRIAL_ITEMS = _([[1,1,1,1,1],[1,1,1,1,1],[1,1,1,1,1],[1,1,1,1,1],[1,1,1,1,1],[1,1,1,1,1],[1,1,1,1,1],[1,1,3,1,2],[1,1,3,1,2],[1,1,3,1,2],
  [1,1,2,1,2],[1,1,4,1,2],[1,1,4,1,2],[1,1,4,1,2],[1,3,1,2,1],[1,3,1,2,1],[1,3,1,2,1],[1,2,1,2,1],[1,2,1,2,1],[1,4,1,2,1],
  [1,3,2,2,2],[1,3,4,2,2],[1,3,3,2,2],[1,4,4,2,2],[1,4,3,2,2],[1,4,2,2,2],[1,2,2,2,2],[1,2,3,2,2],[1,2,4,2,2],[2,2,2,1,1],
  [2,2,2,1,1],[2,2,2,1,1],[2,2,2,1,1],[2,2,2,1,1],[2,2,2,1,1],[2,2,2,1,1],[2,2,2,1,1],[2,2,2,1,1],[2,2,3,1,2],[2,2,3,1,2],
  [2,2,1,1,2],[2,2,1,1,2],[2,2,1,1,2],[2,2,4,1,2],[2,2,4,1,2],[2,2,4,1,2],[2,1,2,2,1],[2,1,2,2,1],[2,1,2,2,1],[2,3,2,2,1],
  [2,3,2,2,1],[2,3,2,2,1],[2,4,2,2,1],[2,4,2,2,1],[2,4,2,2,1],[2,1,1,2,2],[2,1,4,2,2],[2,4,1,2,2],[2,4,3,2,2],[2,4,4,2,2],
  [2,3,1,2,2],[2,3,3,2,2],[2,3,4,2,2],[3,3,3,1,1],[3,3,3,1,1],[3,3,3,1,1],[3,3,3,1,1],[3,3,3,1,1],[3,3,3,1,1],[3,3,3,1,1],
  [3,3,1,1,2],[3,3,1,1,2],[3,3,1,1,2],[3,3,2,1,2],[3,3,4,1,2],[3,3,4,1,2],[3,3,4,1,2],[3,1,3,2,1],[3,1,3,2,1],[3,1,3,2,1],
  [3,2,3,2,1],[3,2,3,2,1],[3,4,3,2,1],[3,4,3,2,1],[3,4,3,2,1],[3,1,1,2,2],[3,1,4,2,2],[3,2,1,2,2],[3,2,4,2,2],[3,4,1,2,2],
  [3,4,2,2,2],[4,4,4,1,1],[4,4,4,1,1],[4,4,4,1,1],[4,4,4,1,1],[4,4,4,1,1],[4,4,4,1,1],[4,4,3,1,2],[4,4,3,1,2],[4,4,3,1,2],
  [4,4,2,1,2],[4,4,2,1,2],[4,4,2,1,2],[4,4,1,1,2],[4,4,1,1,2],[4,4,1,1,2],[4,3,4,2,1],[4,3,4,2,1],[4,3,4,2,1],[4,2,4,2,1],
  [4,2,4,2,1],[4,1,4,2,1],[4,1,4,2,1],[4,1,3,2,2],[4,3,1,2,2],[4,3,3,2,2],[4,3,2,2,2],[4,2,1,2,2],[4,2,3,2,2],[4,2,2,2,2]]).shuffle();  
  
  var initTask = function(task) {
    
    var $instructSlide = $('#init-task');
    
    $instructSlide.show()
    if (task === 'classic') {
      $('#classic-instruct').show()
    } else if (task === 'wm') {
      $('#wm-instruct').show()
    }
  
    $('#start-button').on('click', function() {
      $instructSlide.css('display', 'none')
      startTrials(task); 
    })
  };
  
  var startTrials = function(task) {
    $('.stim').hide()
    $('#stage').show()
    if (task === 'classic') {
      runClassic()
    } else if (task === 'wm') {
      runWM()
    }
  }
  
  var displayWord = function(task, trialsLeft) {
    var $word = $('#word');
    $word.show()
    console.log(WM_TRIAL_ITEMS[CLASSIC_NUM_TRIALS-trialsLeft])
    setTimeout(function() {
      $word.hide()
      interTrial(task, trialsLeft)
    }, 500); // have ITI constant somewhere
    
  }
  var interTrial = function(task, trialsLeft) {
    var $interTrial = $('#intertrial');
    $interTrial.show()
    setTimeout(function() {
      $interTrial.hide()
      if (trialsLeft > 1) {
        displayWord(task, trialsLeft - 1)
      } else {
        finishTask()
      }
    }, 1000);
  }
  
  // WM stroop task only
  var interStim = function() {
    // need separate one for ISI2 & 3?
  }
  
  var displayPatch = function() {
    //
  }
  
  var displayWordTest = function() {
    //
  }
  
  var saveTrialData = function() {
    // calc accuracy, RT; record answers; save into data struc
  }
  

  
  var runClassic = function() {
    displayWord('classic', CLASSIC_NUM_TRIALS)
  }
  
  var runWM = function() {
    displayWord('wm', WM_NUM_TRIALS)
  }
  
  var finishExper = function() {
    // if both tasks have been run..
    $('#finished').show()
  }


// randomize task order, then init 1 and have other run at end
  initTask('classic'); 
  
});