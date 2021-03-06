var getDbStats = function() {
  console.log("Loading getDbStats");

  var obj = {
    action: 'getDbStats'
  };

  jQuery.ajax(url_base + '/application/controller/db_stats.php', {
    type: 'post',
    data: obj,
    success: function (e) {
      console.log("Ok! getDbStats");
      var data = jQuery.parseJSON(e);
      renderDbStats(data);
    },
    error: function (e) {
      console.log("Error! getDbStats", e);
    }
  });
};

var renderDbStats = function(data) {
  jQuery('#contributors-stat').html(data.submitters);
  jQuery('#destinations-stat').html(data.destinations);
  jQuery('#traceroutes-stat').html(data.traceroutes);
  jQuery('#latest-tr-stat').html(data.latest_contribution);
};