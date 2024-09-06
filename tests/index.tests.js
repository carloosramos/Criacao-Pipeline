const { toggleDisplay } = require('../index.js');
describe('toggleDisplay', () => {
    beforeEach(() => {
        document.body.innerHTML = `
            <div id="hideImage" style="display: block;"></div>
            <div id="showImage" style="display: none;"></div>
            <button id="hideSwitchButton" style="display: block;"></button>
            <button id="showSwitchButton" style="display: none;"></button>
            `;
    });

    test('Alterar estado de visualização das imagens e botões', () => {
        toggleDisplay('hideImage', 'showImage', 'hideSwitchButton', 'showSwitchButton');

        expect(document.getElementById('hideImage').style.display).toBe('none');
        expect(document.getElementById('showImage').style.display).toBe('block');
        expect(document.getElementById('hideSwitchButton').style.display).toBe('none');
        expect(document.getElementById('showSwitchButton').style.display).toBe('block');
    });
});