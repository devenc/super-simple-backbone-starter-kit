// 玩家
define(['view/payment-view'],function(PaymentView){
    var Player = Backbone.Model.extend({
        initialize: function() {
            this.paymentView = new PaymentView();
        }
    });

    return Player;
})