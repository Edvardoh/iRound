Ext.define('iRound.view.Main', {
    extend: 'Ext.Container',
    xtype: 'main',
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
            title: 'iRound - Nurse Rounding',
        },
        {
            xtype: 'image',
            src: 'http://iround.local/img/iRound_transparant.png',
            height: 240,
            width: 220,
            margin: '30 5 100 5'
        },
        {
            xtype: 'label',
            html: 'Swipe ID to log in',
            style: {
                color: 'red',
                fontSize: '22px'
            }
        },
        {
            xtype: 'button',
            text: "Swipe Action",
            width: 200,
            height: 100,
            margin: '30 5 5 5',
            id: 'swipeButton'
        }]
    }
});
