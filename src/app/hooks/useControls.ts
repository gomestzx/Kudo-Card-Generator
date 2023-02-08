"use client"
import { useContext } from 'react';
import { ControlsContext } from '../context/ControlsContext';

export default function useControls() {
  const ctx = useContext(ControlsContext);
  return ctx;
};


