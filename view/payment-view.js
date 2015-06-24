define(['model/payment-model', 'tpl/payment.tpl'],function(Payment,paymentTpl){
    var PaymentView = Backbone.View.extend({
        // el:'#paymentContainer',
        initialize: function(){
          this.model = new Payment();
          this.model.on('change', this.render, this);
        },
        template: _.template(paymentTpl),

        render: function(appleName){
          var paymentHtml = this.template(this.model);
          // this.$el.html(paymentHtml);
          return paymentHtml;
        }

    });

    return PaymentView;
})