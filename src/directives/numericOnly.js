function numericOnlyOnKeyDown(evt) {
    const pressedKey = evt.key.toUpperCase();
    const allowedKeys = ['DELETE', 'BACKSPACE', 'TAB', 'ESCAPE', 'ENTER', 'END', 'HOME', 'ARROWLEFT', 'ARROWRIGHT', '.', '-'];

    if (allowedKeys.includes(pressedKey)) {
        return;
    }

    // Разрешить комбинации Ctrl/Cmd + A, C, X, V и т.п. (включая кириллические символы)
    if ((evt.ctrlKey || evt.metaKey) && ['A', 'Ф', 'C', 'С', 'X', 'Ч', 'V', 'М'].includes(pressedKey)) {
        return;
    }

    if ((evt.ctrlKey || evt.shiftKey) && pressedKey === 'INSERT') {
        return;
    }

    // Блокируем всё, кроме цифр
    if (!['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'].includes(pressedKey)) {
        evt.preventDefault();
    }
}

function numericOnlyOnPaste(evt) {
    const clipboardData = evt.clipboardData || window.clipboardData;
    const pastedData = clipboardData.getData('Text');
    const pastedDataCleared = pastedData.replace(/\D+/g, '');

    if (pastedData.length !== pastedDataCleared.length) {
        evt.preventDefault();
        document.execCommand("insertText", false, pastedDataCleared);
    }
}

export default {
    mounted(el) {
        el.addEventListener('keydown', numericOnlyOnKeyDown);
        el.addEventListener('paste', numericOnlyOnPaste);
    },
    unmounted(el) {
        el.removeEventListener('keydown', numericOnlyOnKeyDown);
        el.removeEventListener('paste', numericOnlyOnPaste);
    }
};