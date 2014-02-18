Ext.define('iRound.view.LoginSuccess', {
    extend: 'Ext.Container',
    xtype: 'LoginSuccess',
    requires: [
        'Ext.TitleBar',
    ],
    config: {
        layout: {
            type: 'vbox',
            align: 'center',
            pack: 'center'
        },
    items: [{            
            xtype: 'titlebar',
            docked: 'top',
            title: 'iRound - Nurse Rounding'
        },
        {
            xtype: 'label',
            html: 'Swipe Accepted!',
            style: {
                color: 'green',
                fontSize: '32px'
            },
            margin: '10 5 40 5'
        },
        {
            xtype: 'label',
            html: 'Is this you?'
        },
        {
            xtype: 'container',
            layout: {
                type: 'hbox',
                align: 'center',
                pack: 'center'
                },
            width: 300,
            height: 200,
            margin: '15 5 5 5',
            items: [{
                xtype: 'image',
                src: 'http://iround.local/img/JohnStamos.jpg',
                height: 200,
                width: 200
                },
                {
                xtype: 'container',
                layout: {
                    type: 'vbox',
                    align: 'left',
                    pack: 'bottom'
                },
                height: 200,
                items: [{
                    xtype: 'label',
                    html: 'Name: John Stamos',
                },
                {
                    xtype: 'label',
                    html: 'Nurse ID: 576-8819',
                },
                {
                    xtype: 'label',
                    html: 'Department: Recovery'
                }]
            }]
        },
        {   xtype: 'container',
            layout: {
                type: 'hbox',
                align: 'center',
                pack: 'center'
                },
            margin: '15 5 5 5',
            items: [{
                xtype: 'button',
                text: "Yes",
                width: 200,
                height: 100,
                margin: '10 5 5 5',
                id: 'loginYes'
                },
                {
                xtype: 'button',
                text: "No",
                width: 200,
                height: 100,
                margin: '10 5 5 5',
                id: 'loginNo'
                }]
        }]
    }
});