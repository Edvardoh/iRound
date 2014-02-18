Ext.define('iRound.controller.LoginSuccess', {
    extend: 'Ext.app.Controller',
    config: {
        refs: {
            yesButton: '#loginYes',
            noButton: '#loginNo'
        },
        control: {
            yesButton: {
                tap: 'yesAction'
            },
            noButton: {
                tap: 'noAction'
            }
        },
        routes:{}
    },
    init: function() {
        console.log('inside the LoginSuccess controller init');
    },
    launch: function() {
        console.log('inside the LoginSuccess controller launch');
    },
    yesAction: function() {
        console.log('Yes button clicked');
        Ext.Viewport.setActiveItem(Ext.create('iRound.view.Dashboard')); //load dashboard view
    },
    noAction: function() {
        console.log('No button clicked');
        Ext.Viewport.setActiveItem(Ext.create('iRound.view.Main')); //load dashboard view
    },
});