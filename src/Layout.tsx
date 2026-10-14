import { useEffect } from 'react';
import { Outlet, ScrollRestoration, useLocation } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}

export function Layout() {
  const location = useLocation();

  useEffect(() => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('config', 'G-7WBWKD0G5W', {
        page_path: location.pathname + location.search,
      });
    }
  }, [location]);

  // Smart Content Protection: Disable right-click & dragging on images, and block Ctrl+S
  useEffect(() => {
    const handleContextMenu = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const isImage = 
        target.tagName === 'IMG' || 
        target.closest('img') !== null || 
        target.tagName === 'PICTURE' || 
        target.tagName === 'CANVAS';

      if (isImage) {
        e.preventDefault();
      }
    };

    const handleDragStart = (e: DragEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      if (target.tagName === 'IMG' || target.closest('img') !== null) {
        e.preventDefault();
      }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 's') {
        e.preventDefault();
      }
    };

    document.addEventListener('contextmenu', handleContextMenu);
    document.addEventListener('dragstart', handleDragStart);
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('contextmenu', handleContextMenu);
      document.removeEventListener('dragstart', handleDragStart);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <div className="min-h-screen bg-white text-zinc-900 font-sans selection:bg-red-600 selection:text-white">
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
      <ScrollRestoration />
    </div>
  );
}
