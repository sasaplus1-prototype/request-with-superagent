(function(){

  'use strict';

  function ViewModel() {
    this.request = (function() {
      var that = this;

      superagent.get('./data.json', function(res) {
        that.result(JSON.stringify(res, null, 2));
      })
    }).bind(this);

    this.result = ko.observable('');
  }

  ko.applyBindings(new ViewModel);

}());
