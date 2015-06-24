define(['model/player-model', 'tpl/player.tpl'],function(Player,PlayerTpl){
    var PlayerView = Backbone.View.extend({
        el:'#playArea',

        initialize: function(){
          this.model = new Player();
          this.model.on('change', this.render, this);
        },
        template: _.template(PlayerTpl),

        render: function(playerName){
          var paymentView = this.model.paymentView.render();
          var playerHtml = this.template(this.model,{paymentView:paymentView});
          // this.$el.html(playerHtml);
          return playerHtml;
        }

    });

    return PlayerView;
})