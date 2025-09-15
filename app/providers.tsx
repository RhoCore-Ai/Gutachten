"use client";

import React, { useEffect } from 'react';
import { LanguageProvider, useLanguage } from '../context/LanguageContext';

const LangUpdater = () => {
    const { language } = useLanguage();
    useEffect(() => {
        document.documentElement.lang = language;
    }, [language]);
    return null;
}

export function Providers({ children }: { children: React.ReactNode }) {
    return (
        <LanguageProvider>
            <LangUpdater />
            {children}
        </LanguageProvider>
    );
}
