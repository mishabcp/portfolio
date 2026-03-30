import { useContext, useCallback } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { LenisContext } from '../contexts/LenisContext';
import { scrollToSectionById } from '../utils/scrollToSection';

/** In-page section navigation without putting a hash in the URL. */
export function useSectionScrollNav() {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const lenis = useContext(LenisContext);

  return useCallback(
    (sectionId) => {
      if (pathname === '/') {
        scrollToSectionById(lenis, sectionId);
      } else {
        navigate('/', { state: { scrollToId: sectionId } });
      }
    },
    [pathname, navigate, lenis],
  );
}
