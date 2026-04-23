/* global React */
const { useEffect, useRef, useState, useCallback } = React;

/* ============ custom cursor controller ============ */
function useCursor() {
  useEffect(() => {
    const cursor = document.getElementById("cursor");
    if (!cursor) return;
    const dot = cursor.querySelector(".cursor__dot");
    const ring = cursor.querySelector(".cursor__ring");
    if (!dot || !ring) return;

    let tx = window.innerWidth / 2, ty = window.innerHeight / 2;
    let dx = tx, dy = ty, rx = tx, ry = ty;
    let raf = 0;

    const loop = () => {
      // dot follows instantly
      dx += (tx - dx) * 0.6;
      dy += (ty - dy) * 0.6;
      // ring trails
      rx += (tx - rx) * 0.15;
      ry += (ty - ry) * 0.15;
      dot.style.transform = `translate(${dx}px, ${dy}px) translate(-50%, -50%)`;
      ring.style.transform = `translate(${rx}px, ${ry}px) translate(-50%, -50%)`;
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

    const onMove = (e) => { tx = e.clientX; ty = e.clientY; };
    const onOver = (e) => {
      const t = e.target;
      if (!(t instanceof Element)) return;
      const hoverEl = t.closest("a, button, [data-cursor='hover'], .work__row");
      const textEl = t.closest("p, h1, h2, h3, h4, [data-cursor='text']");
      cursor.classList.toggle("-hover", !!hoverEl);
      cursor.classList.toggle("-text", !hoverEl && !!textEl);
    };
    const onLeave = () => {
      cursor.classList.remove("-hover");
      cursor.classList.remove("-text");
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("mouseover", onOver, { passive: true });
    window.addEventListener("mouseout", onLeave, { passive: true });
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
      window.removeEventListener("mouseout", onLeave);
    };
  }, []);
}

/* ============ reveal on scroll ============ */
function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal, .mask-line");
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add("-in");
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -60px 0px" });
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

/* ============ magnetic button ============ */
function Magnetic({ children, strength = 0.35, className = "", as = "a", href, onClick, ...rest }) {
  const ref = useRef(null);
  const onMove = useCallback((e) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const x = e.clientX - (r.left + r.width / 2);
    const y = e.clientY - (r.top + r.height / 2);
    el.style.transform = `translate(${x * strength}px, ${y * strength}px)`;
  }, [strength]);
  const onLeave = useCallback(() => {
    const el = ref.current;
    if (el) el.style.transform = "translate(0,0)";
  }, []);
  const Comp = as;
  return (
    <Comp
      ref={ref}
      href={href}
      onClick={onClick}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className={className}
      style={{ transition: "transform .3s cubic-bezier(.2,.8,.2,1)", display: "inline-flex" }}
      {...rest}
    >
      {children}
    </Comp>
  );
}

/* ============ live clock (São Paulo) ============ */
function LiveClock() {
  const [time, setTime] = useState("");
  useEffect(() => {
    const fmt = () => {
      try {
        const t = new Date().toLocaleTimeString("en-GB", {
          timeZone: "America/Sao_Paulo",
          hour: "2-digit", minute: "2-digit", second: "2-digit",
        });
        setTime(t);
      } catch { setTime(""); }
    };
    fmt();
    const id = setInterval(fmt, 1000);
    return () => clearInterval(id);
  }, []);
  return <span className="nav__time">SÃO PAULO · {time}</span>;
}

/* ============ arrow ============ */
const ArrowUpRight = ({ size = 14 }) => (
  <svg className="arrow" width={size} height={size} viewBox="0 0 14 14" fill="none" aria-hidden="true">
    <path d="M3 11L11 3M11 3H4.5M11 3V9.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

Object.assign(window, { useCursor, useReveal, Magnetic, LiveClock, ArrowUpRight });
