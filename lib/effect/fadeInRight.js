'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});
exports['default'] = {
    'mask': {
        'position': 'fixed',
        'top': 0,
        'left': 0,
        'width': '100%',
        'height': '100%',
        'backgroundColor': 'rgba(0, 0, 0, 0.7)',
        'zIndex': 10000
    },
    'maskHidden': {
        'display': 'none'
    },
    'panel': {
        'position': 'fixed',
        'backgroundColor': '#fff',
        'width': '800px',
        'height': '800px',
        'top': '0',
        'left': '0',
        'marginTop': '0',
        'marginLeft': '0',
        'borderRadius': '0',
        'boxSizing': 'border-box',
        'boxShadow': '0 2px 4px rgba(0, 0, 0, 0.3)',
        'transform': 'translate3d(0, 0, 0)',
        'transition': 'transform 500ms cubic-bezier(0, 0, 0.25, 1), opacity 500ms cubic-bezier(0, 0, 0.25, 1)',
        'zIndex': 10001
    },
    'panelHidden': {
        'transform': 'translate3d(100px, 0, 0)',
        'opacity': 0,
        'zIndex': -1,
        'height': 0,
        'width': 0,
        'overflow': 'hidden'
    }
};
module.exports = exports['default'];