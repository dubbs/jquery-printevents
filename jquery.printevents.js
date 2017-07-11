(function (window, document, $) {

  var beforePrint = function() {
    $(document).trigger('print:before');
  };
  var afterPrint = function() {
    $(document).trigger('print:after');
  };

  if (window.matchMedia) {
    var mediaQueryList = window.matchMedia('print');
    mediaQueryList.addListener(function(mql) {
      if (mql.matches) {
        beforePrint();
      } else {
        afterPrint();
      }
    });
  }

  window.onbeforeprint = beforePrint;
  window.onafterprint = afterPrint;

}(this, this.document, this.jQuery));
