import React, { useCallback, useEffect, useRef, useState, type ReactNode } from 'react';
import styles from './styles.module.css';

const MIN = 0.35;
const MAX = 2.5;
const STEP = 0.15;

function clamp(n: number, min: number, max: number): number {
  return Math.min(max, Math.max(min, n));
}

export interface MermaidDiagramFrameProps {
  children: ReactNode;
  /** Shown on the left of the toolbar */
  hint?: string;
}

/**
 * Wraps a ```mermaid fenced block in MDX. Provides fullscreen, zoom buttons,
 * and Ctrl/Cmd + scroll wheel zoom inside the diagram viewport.
 */
export default function MermaidDiagramFrame({ children, hint }: MermaidDiagramFrameProps): React.ReactNode {
  const rootRef = useRef<HTMLDivElement>(null);
  const viewportRef = useRef<HTMLDivElement>(null);
  const scalableRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);
  const [fullscreen, setFullscreen] = useState(false);

  const applyScale = useCallback((s: number) => {
    const el = scalableRef.current;
    if (!el) return;
    el.style.transform = `scale(${s})`;
  }, []);

  useEffect(() => {
    applyScale(scale);
  }, [scale, applyScale]);

  useEffect(() => {
    const onFs = () => {
      const el = rootRef.current;
      setFullscreen(!!el && document.fullscreenElement === el);
    };
    document.addEventListener('fullscreenchange', onFs);
    return () => document.removeEventListener('fullscreenchange', onFs);
  }, []);

  const zoomIn = () => setScale((prev) => clamp(prev + STEP, MIN, MAX));
  const zoomOut = () => setScale((prev) => clamp(prev - STEP, MIN, MAX));
  const resetZoom = () => setScale(1);

  const toggleFullscreen = async () => {
    const el = rootRef.current;
    if (!el) return;
    try {
      if (!document.fullscreenElement) {
        await el.requestFullscreen();
      } else {
        await document.exitFullscreen();
      }
    } catch {
      /* ignore */
    }
  };

  const onWheel = (e: React.WheelEvent<HTMLDivElement>) => {
    if (!e.ctrlKey && !e.metaKey) return;
    e.preventDefault();
    const delta = e.deltaY < 0 ? STEP : -STEP;
    setScale((prev) => clamp(prev + delta, MIN, MAX));
  };

  return (
    <div ref={rootRef} className={`${styles.root} ${fullscreen ? styles.fullscreen : ''}`}>
      <div className={styles.toolbar} role="toolbar" aria-label="Diagram zoom and full view">
        {hint ? <span className={styles.hint}>{hint}</span> : null}
        <button type="button" onClick={zoomOut} aria-label="Zoom out">
          Zoom out
        </button>
        <button type="button" className={styles.zoomPercent} aria-current="true" disabled>
          {Math.round(scale * 100)}%
        </button>
        <button type="button" onClick={zoomIn} aria-label="Zoom in">
          Zoom in
        </button>
        <button type="button" onClick={resetZoom} aria-label="Reset zoom to one hundred percent">
          Reset
        </button>
        <button type="button" onClick={toggleFullscreen} aria-label={fullscreen ? 'Exit full screen' : 'Full screen diagram'}>
          {fullscreen ? 'Exit full view' : 'Full view'}
        </button>
      </div>
      <div
        ref={viewportRef}
        className={styles.viewport}
        onWheel={onWheel}
        tabIndex={0}
        role="region"
        aria-label="Pathway diagram scroll and zoom area. Use Ctrl or Command with scroll wheel to zoom."
      >
        <div ref={scalableRef} className={styles.scalable}>
          {children}
        </div>
      </div>
    </div>
  );
}
