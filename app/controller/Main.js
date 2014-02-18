Ext.define('iRound.controller.Main', {
    extend: 'Ext.app.Controller',
    config: {
        refs: {
            theButton: '#swipeButton',
        },
        control: {
            theButton: {
                tap: 'login'
            }
        },
        routes:{}
    },
    init: function() {
        console.log('inside the main controller init');
    },
    launch: function() {
        console.log('inside the main controller launch');
    },
    login: function() {
        console.log('swipe button clicked');
        Ext.Viewport.setActiveItem(Ext.create('iRound.view.LoginSuccess')); //load login success view
    }
});