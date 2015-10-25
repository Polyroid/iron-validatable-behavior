Package.describe({
    name: 'polyroid:iron-validatable-behavior',
    version: '1.0.5',
    summary: 'Provides a behavior for an element that validates user input',
    git: 'https://github.com/Polyroid/iron-validatable-behavior.git',
    documentation: null
});

Package.onUse(function (api) {
    api.versionsFrom('1.2');

    api.use([
        'polyroid:iron-meta@1.0.0',
        'polyroid:polymer@1.0.0'
    ], 'client');

    api.addAssets([
        'iron-validatable-behavior.html'
    ], 'client');
});
