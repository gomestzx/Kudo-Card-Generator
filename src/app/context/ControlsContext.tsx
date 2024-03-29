'use client';
import { createContext, useState } from 'react';

interface IControlsContext {
  color: string;
  setColor(e: any): void;
  text: string;
  title: string;
  setTitle(e: any): void;
  setText(e: any): void;
  link?: string;
  shortUrl: string;
  setShortUrl(e: any): void;
  loading: boolean;
  setLoading(e: any): void;
}

interface IProvider {
  children: React.ReactNode;
}

export const ControlsContext = createContext({} as IControlsContext);

export function ControlsProvider({ children }: IProvider) {
  const [color, setColor] = useState('2563EB');
  const [text, setText] = useState('');
  const [title, setTitle] = useState('Totally awesome');
  const [shortUrl, setShortUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const link = `/card?title=${title}&color=${color}&text=${text}`;
  return (
    <ControlsContext.Provider
      value={{
        color: color,
        title: title,
        text: text,
        setColor,
        setTitle,
        setText,
        link,
        shortUrl: shortUrl,
        setShortUrl,
        loading,
        setLoading,
      }}
    >
      {children}
    </ControlsContext.Provider>
  );
}
