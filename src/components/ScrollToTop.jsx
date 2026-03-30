import { useContext, useEffect, useLayoutEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { LenisContext } from '../contexts/LenisContext';
import { scrollToSectionById } from '../utils/scrollToSection';

function parseHashId(hash) {
  if (!hash || hash.length <= 1) return '';
  try {
    return decodeURIComponent(hash.slice(1));
  } catch {
    return hash.slice(1);
  }
}

/**
 * Scroll to top on route changes; optional hash or navigate state scroll targets (e.g. from bookmarks).
 * Navbar uses programmatic scroll without changing the URL.
 */
export default function ScrollToTop() {
  const { pathname, hash, state } = useLocation();
  const navigate = useNavigate();
  const lenis = useContext(LenisContext);

  const scrollToIdFromState = state && typeof state === 'object' ? state.scrollToId : undefined;

  useLayoutEffect(() => {
    if (pathname === '/' && hash.length > 1) return;
    if (pathname === '/' && scrollToIdFromState) return;
    if (lenis) {
      lenis.scrollTo(0, { immediate: true });
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash, lenis, scrollToIdFromState]);

  useEffect(() => {
    if (!(pathname === '/' && hash.length > 1)) return;

    const id = parseHashId(hash);
    if (!id) return;

    scrollToSectionById(lenis, id);
  }, [pathname, hash, lenis]);

  useEffect(() => {
    if (!(pathname === '/' && scrollToIdFromState)) return;

    let cancelled = false;

    scrollToSectionById(lenis, scrollToIdFromState, {
      onComplete: () => {
        if (cancelled) return;
        navigate('.', { replace: true, state: {} });
      },
    });

    return () => {
      cancelled = true;
    };
  }, [pathname, scrollToIdFromState, lenis, navigate]);

  return null;
}
