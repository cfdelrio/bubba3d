'use client';

export default function OrkLink() {
  function handleClick() {
    const props = { source_page: window.location.pathname, source_section: 'footer', destination: 'https://ork3d.com' };
    if (typeof window !== 'undefined') {
      if (typeof (window as any).gtag === 'function') (window as any).gtag('event', 'click_ork3d', props);
      if (typeof (window as any).plausible === 'function') (window as any).plausible('click_ork3d', { props });
      console.debug('[Bubba3D]', 'click_ork3d', props);
    }
  }

  return (
    <div className="flex flex-col gap-3">
      <p className="text-sm text-muted leading-relaxed">
        ¿Buscás trofeos, premios o piezas para empresas y eventos?
      </p>
      <a
        href="https://ork3d.com"
        target="_blank"
        rel="noopener"
        onClick={handleClick}
        className="inline-flex items-center gap-1.5 text-sm font-semibold text-lila-dark hover:text-[#6D28D9] transition-colors duration-150 group w-fit"
        aria-label="Trofeos y reconocimientos personalizados en ORK3D"
      >
        Trofeos y reconocimientos en ORK3D
        <span className="group-hover:translate-x-0.5 transition-transform duration-150" aria-hidden="true">→</span>
      </a>
    </div>
  );
}
