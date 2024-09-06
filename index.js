function toggleDisplay(hideElementId, showElementId, hideButtonId, showButtonId) {
    var hideImage = document.getElementById(hideElementId);
    var showImage = document.getElementById(showElementId);
    var showSwitchButton = document.getElementById(showButtonId);
    var hideSwitchButton = document.getElementById(hideButtonId);
    if (hideImage) {
        hideImage.style.display = 'none';
        hideSwitchButton.style.display = 'none';
    }
    if (showImage) {
        showImage.style.display = 'block';
        showSwitchButton.style.display = 'block';
    }
}

module.exports = { toggleDisplay };