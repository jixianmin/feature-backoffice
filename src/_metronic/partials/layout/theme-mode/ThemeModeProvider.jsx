import React, { createContext, useContext, useEffect, useState } from 'react';
import { ThemeModeComponent } from '../../../assets/ts/layout';
import { toAbsoluteUrl } from '../../../helpers';
const systemMode = ThemeModeComponent.getSystemMode();
const themeModeSwitchHelper = (_mode) => {
    // change background image url
    const mode = _mode !== 'system' ? _mode : systemMode;
    const imageUrl = '/media/patterns/header-bg' + (mode === 'light' ? '.jpg' : '-dark.png');
    document.body.style.backgroundImage = `url("${toAbsoluteUrl(imageUrl)}")`;
};
const themeModeLSKey = 'kt_theme_mode_value';
const themeMenuModeLSKey = 'kt_theme_mode_menu';
const getThemeModeFromLocalStorage = (lsKey) => {
    if (!localStorage) {
        return 'light';
    }
    const data = localStorage.getItem(lsKey);
    if (!data) {
        return 'light';
    }
    if (data === 'light') {
        return 'light';
    }
    if (data === 'dark') {
        return 'dark';
    }
    return 'system';
};
const defaultThemeMode = {
    mode: getThemeModeFromLocalStorage(themeModeLSKey),
    menuMode: getThemeModeFromLocalStorage(themeMenuModeLSKey),
    updateMode: (_mode) => { },
    updateMenuMode: (_menuMode) => { },
};
const ThemeModeContext = createContext({
    mode: defaultThemeMode.mode,
    menuMode: defaultThemeMode.menuMode,
    updateMode: (_mode) => { },
    updateMenuMode: (_menuMode) => { },
});
const useThemeMode = () => useContext(ThemeModeContext);
const ThemeModeProvider = ({ children }) => {
    const [mode, setMode] = useState(defaultThemeMode.mode);
    const [menuMode, setMenuMode] = useState(defaultThemeMode.menuMode);
    const updateMode = (_mode) => {
        const updatedMode = _mode === 'system' ? systemMode : _mode;
        setMode(updatedMode);
        // themeModeSwitchHelper(updatedMode)
        if (localStorage) {
            localStorage.setItem(themeModeLSKey, updatedMode);
        }
        document.documentElement.setAttribute('data-theme', updatedMode);
        ThemeModeComponent.init();
    };
    const updateMenuMode = (_menuMode) => {
        setMenuMode(_menuMode);
        if (localStorage) {
            localStorage.setItem(themeMenuModeLSKey, _menuMode);
        }
    };
    useEffect(() => {
        updateMode(mode);
        updateMenuMode(menuMode);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return (<ThemeModeContext.Provider value={{ mode, menuMode, updateMode, updateMenuMode }}>
      {children}
    </ThemeModeContext.Provider>);
};
export { ThemeModeProvider, useThemeMode, systemMode, themeModeSwitchHelper };
