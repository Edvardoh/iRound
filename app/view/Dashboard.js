Ext.define('iRound.view.Dashboard', {
    extend: 'Ext.tab.Panel',
    xtype: 'Dashboard',
    requires: [
        'Ext.TitleBar',
    ],
    config: {
        tabBarPosition: 'bottom',
        items: [{
            title: 'Dashboard',
            html: 'Dashboard'
        },
        {
            title: 'Bed Select',
            html: 'Select Floor and Bed numbers'
        },
        {
            title: 'New Patient',
            html: 'Fill out new patient info'
        },
        {
            title: 'Existing Patient',
            html: 'Check existing patient info'
        }]
    }
});