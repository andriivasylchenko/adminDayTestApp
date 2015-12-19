angular.module('app.services', [])

.service('WLServices',  function($q) // Add $q
{
  this.callWLconnect = function() {
    console.log('--> trying to connect to MFP server');
      var deferred = $q.defer();

      WL.Client.connect({
      onSuccess: function() {
        console.log('--> connected to MFP server');
        deferred.resolve(true);
      },
      onFailure: function() {
        console.log('--> failed to connect to MFP server');
        deferred.reject(false);
      }
    })

    return deferred.promise;
  };

  this.callWLAdapter = function() {
    console.log('--> trying to call MFP adapter');

    var invocationData = {
        adapter : 'TestAdapter',
        procedure : 'getAdapterReply',
        parameters : []
    };

    return WL.Client.invokeProcedure(invocationData, {
      onSuccess: function(result){
        console.log("--> adapter call success", result);
        return result.invocationResult;
      },
      onFailure: function(result){
        console.log("--> adapter call failure", result);
        return 'failure';
      }
    });

  };
});
