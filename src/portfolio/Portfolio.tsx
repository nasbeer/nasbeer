import { useEffect, useRef, useState } from 'react';
import type { CSSProperties } from 'react';
import {
  Github, Linkedin, Facebook, Youtube, Instagram, Mail, MapPin, ExternalLink,
  ArrowRight, Award, Trophy, Code2, Menu, X, ArrowUp, Copy,
} from 'lucide-react';
import {
  EMAIL, LINKS, PILLARS, TECH, FEATURED, PROJECTS, ACCOMPLISH, JOBS, CERTS,
  FILTERS, NAV, SOCIAL, SERVICES,
} from './data';
import type { Pillar, Project, SocialKey } from './data';
import './portfolio.css';

/* eslint-disable @typescript-eslint/no-explicit-any */
const REDUCED = typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const PORTRAIT = `${import.meta.env.BASE_URL}images/hero-portrait.jpg`;
const THREE_URL = 'https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js';
const FONTS_URL = 'https://fonts.googleapis.com/css2?family=Archivo:wdth,wght@62..125,400..900&family=Instrument+Sans:wght@400;500;600&family=JetBrains+Mono:wght@400;500&display=swap';

const SOCIAL_ICON: Record<SocialKey, typeof Github> = { github: Github, linkedin: Linkedin, facebook: Facebook, youtube: Youtube, instagram: Instagram };

let threePromise: Promise<any> | null = null;
function loadThree(): Promise<any> {
  const w = window as any;
  if (w.THREE) return Promise.resolve(w.THREE);
  if (!threePromise) {
    threePromise = new Promise((resolve, reject) => {
      const s = document.createElement('script');
      s.src = THREE_URL;
      s.async = true;
      s.onload = () => resolve(w.THREE);
      s.onerror = reject;
      document.head.appendChild(s);
    });
  }
  return threePromise;
}

function useFonts() {
  useEffect(() => {
    if (document.querySelector(`link[href="${FONTS_URL}"]`)) return;
    const l = document.createElement('link');
    l.rel = 'stylesheet';
    l.href = FONTS_URL;
    document.head.appendChild(l);
  }, []);
}

function showToast(msg: string) {
  const t = document.getElementById('nx-toast') as (HTMLElement & { _h?: number }) | null;
  if (!t) return;
  t.textContent = msg;
  t.classList.add('show');
  window.clearTimeout(t._h);
  t._h = window.setTimeout(() => t.classList.remove('show'), 1800);
}

function copyEmail() {
  const fallback = () => {
    const el = document.getElementById('email-text');
    if (!el) return;
    const r = document.createRange();
    r.selectNodeContents(el);
    const s = window.getSelection();
    s?.removeAllRanges();
    s?.addRange(r);
    showToast('Press Ctrl/⌘+C to copy');
  };
  try {
    navigator.clipboard.writeText(EMAIL).then(() => showToast('Email copied')).catch(fallback);
  } catch {
    fallback();
  }
}

/* ---------- 3D hero: globe around the portrait + full-width ambient field ---------- */
const CHIPS = ['React Native', 'AI/ML', 'Python', 'LLMs · RAG', 'Node.js', 'Kubernetes'];

function HeroCore() {
  const stageRef = useRef<HTMLDivElement>(null);
  const chipRefs = useRef<(HTMLSpanElement | null)[]>([]);

  useEffect(() => {
    let cleanup = () => {};
    let cancelled = false;
    loadThree().then((T: any) => {
      const stage = stageRef.current;
      if (cancelled || !stage || !T) return;
      const hero = stage.closest('.hero') as HTMLElement;
      const renderer = new T.WebGLRenderer({ antialias: true, alpha: true });
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer.domElement.className = 'hero-canvas';
      hero.prepend(renderer.domElement);

      const scene = new T.Scene();
      const cam = new T.PerspectiveCamera(42, 1, 0.1, 200);
      cam.position.set(0, 0, 14.6);
      const root = new T.Group();
      scene.add(root);
      const blue = new T.Color('#2f7bff');
      const ice = new T.Color('#7fd8ff');

      // fibonacci point shell
      const N = 1400;
      const pos = new Float32Array(N * 3);
      const col = new Float32Array(N * 3);
      for (let i = 0; i < N; i++) {
        const y = 1 - (i / (N - 1)) * 2;
        const r = Math.sqrt(1 - y * y);
        const th = i * 2.39996;
        const R = 3.05 + Math.random() * 0.08;
        pos[i * 3] = Math.cos(th) * r * R; pos[i * 3 + 1] = y * R; pos[i * 3 + 2] = Math.sin(th) * r * R;
        const c = blue.clone().lerp(ice, Math.random());
        col[i * 3] = c.r; col[i * 3 + 1] = c.g; col[i * 3 + 2] = c.b;
      }
      const pg = new T.BufferGeometry();
      pg.setAttribute('position', new T.BufferAttribute(pos, 3));
      pg.setAttribute('color', new T.BufferAttribute(col, 3));
      const pm = new T.PointsMaterial({ size: 0.045, vertexColors: true, transparent: true, opacity: 0.9, blending: T.AdditiveBlending, depthWrite: false });
      root.add(new T.Points(pg, pm));

      // neural nodes + edges
      const nodes: any[] = [];
      for (let i = 0; i < 70; i++) {
        const v = new T.Vector3(Math.random() - 0.5, Math.random() - 0.5, Math.random() - 0.5).normalize();
        nodes.push(v.multiplyScalar(3.55 + Math.random() * 0.5));
      }
      const ep: number[] = [];
      for (let i = 0; i < nodes.length; i++) for (let j = i + 1; j < nodes.length; j++) {
        if (nodes[i].distanceTo(nodes[j]) < 1.55) ep.push(nodes[i].x, nodes[i].y, nodes[i].z, nodes[j].x, nodes[j].y, nodes[j].z);
      }
      const eg = new T.BufferGeometry();
      eg.setAttribute('position', new T.Float32BufferAttribute(ep, 3));
      root.add(new T.LineSegments(eg, new T.LineBasicMaterial({ color: ice, transparent: true, opacity: 0.22, blending: T.AdditiveBlending, depthWrite: false })));
      root.add(new T.Points(new T.BufferGeometry().setFromPoints(nodes), new T.PointsMaterial({ color: '#bfe9ff', size: 0.13, transparent: true, opacity: 0.95, blending: T.AdditiveBlending, depthWrite: false })));

      const ico = new T.LineSegments(new T.WireframeGeometry(new T.IcosahedronGeometry(4.4, 1)), new T.LineBasicMaterial({ color: blue, transparent: true, opacity: 0.12 }));
      root.add(ico);

      // orbit rings with travelling sparks
      const rings: any[] = [];
      ([[4.25, 1.1, 0.3], [4.7, -0.5, 0.9], [5.1, 0.35, -0.6]] as const).forEach(([r, a, b], k) => {
        const ring = new T.Mesh(new T.TorusGeometry(r, 0.008, 8, 220), new T.MeshBasicMaterial({ color: k === 1 ? ice : blue, transparent: true, opacity: 0.45, blending: T.AdditiveBlending }));
        ring.rotation.set(a, b, 0);
        const spark = new T.Mesh(new T.SphereGeometry(0.06, 12, 12), new T.MeshBasicMaterial({ color: '#ffffff' }));
        ring.add(spark);
        ring.userData = { spark, r, sp: 0.35 + k * 0.18 };
        scene.add(ring);
        rings.push(ring);
      });

      // full-width ambient field
      const ambient = new T.Group();
      scene.add(ambient);
      const AN = 2600;
      const ap = new Float32Array(AN * 3);
      const ac = new Float32Array(AN * 3);
      for (let i = 0; i < AN; i++) {
        ap[i * 3] = (Math.random() - 0.5) * 90; ap[i * 3 + 1] = (Math.random() - 0.5) * 44; ap[i * 3 + 2] = -4 - Math.random() * 26;
        const c = blue.clone().lerp(ice, Math.random() * 0.8);
        ac[i * 3] = c.r; ac[i * 3 + 1] = c.g; ac[i * 3 + 2] = c.b;
      }
      const ag = new T.BufferGeometry();
      ag.setAttribute('position', new T.BufferAttribute(ap, 3));
      ag.setAttribute('color', new T.BufferAttribute(ac, 3));
      ambient.add(new T.Points(ag, new T.PointsMaterial({ size: 0.09, vertexColors: true, transparent: true, opacity: 0.75, blending: T.AdditiveBlending, depthWrite: false })));
      const cn: any[] = [];
      for (let i = 0; i < 130; i++) cn.push(new T.Vector3((Math.random() - 0.5) * 70, (Math.random() - 0.5) * 34, -6 - Math.random() * 14));
      const cl: number[] = [];
      for (let i = 0; i < cn.length; i++) {
        let k = 0;
        for (let j = i + 1; j < cn.length && k < 2; j++) {
          if (cn[i].distanceTo(cn[j]) < 7) { cl.push(cn[i].x, cn[i].y, cn[i].z, cn[j].x, cn[j].y, cn[j].z); k++; }
        }
      }
      const cg = new T.BufferGeometry();
      cg.setAttribute('position', new T.Float32BufferAttribute(cl, 3));
      ambient.add(new T.LineSegments(cg, new T.LineBasicMaterial({ color: blue, transparent: true, opacity: 0.18, blending: T.AdditiveBlending, depthWrite: false })));
      ambient.add(new T.Points(new T.BufferGeometry().setFromPoints(cn), new T.PointsMaterial({ color: '#9fd9ff', size: 0.16, transparent: true, opacity: 0.8, blending: T.AdditiveBlending, depthWrite: false })));
      ([[16, 1.25, 0.2, 0.35], [22, 1.4, -0.35, 0.22]] as const).forEach(([r, a, b, o]) => {
        const arc = new T.Mesh(new T.TorusGeometry(r, 0.015, 6, 320), new T.MeshBasicMaterial({ color: ice, transparent: true, opacity: o, blending: T.AdditiveBlending }));
        arc.rotation.set(a, b, 0);
        arc.position.z = -8;
        ambient.add(arc);
      });

      const anchors = CHIPS.map((_, i) => {
        const a = (i / CHIPS.length) * Math.PI * 2;
        return new T.Vector3(Math.cos(a) * 4.4, Math.sin(a * 2) * 1.3, Math.sin(a) * 4.4);
      });
      const chipGroup = new T.Group();
      scene.add(chipGroup);

      let w = 1, h = 1, sl = 0, st = 0;
      const resize = () => {
        const hr = hero.getBoundingClientRect();
        const sr = stage.getBoundingClientRect();
        w = hr.width; h = hr.height; sl = sr.left - hr.left; st = sr.top - hr.top;
        const cx = sl + sr.width / 2;
        const cy = st + sr.height / 2;
        renderer.setSize(w, h, false);
        const tan = Math.tan((21 * Math.PI) / 180);
        cam.position.z = Math.max(9, (5.4 * h) / (sr.width * tan));
        cam.aspect = w / h;
        cam.setViewOffset(w, h, w / 2 - cx, h / 2 - cy, w, h);
        cam.updateProjectionMatrix();
      };
      resize();
      const ro = new ResizeObserver(resize);
      ro.observe(stage);
      ro.observe(hero);

      let mx = 0, my = 0, tx = 0, ty = 0;
      const onMove = (e: PointerEvent) => { tx = e.clientX / window.innerWidth - 0.5; ty = e.clientY / window.innerHeight - 0.5; };
      window.addEventListener('pointermove', onMove, { passive: true });
      let visible = true;
      const io = new IntersectionObserver(([e]) => { visible = e.isIntersecting; });
      io.observe(hero);

      const v = new T.Vector3();
      const mobileMq = window.matchMedia('(max-width: 900px)');
      const t0 = performance.now();
      let raf = 0;
      const frame = (now: number) => {
        raf = requestAnimationFrame(frame);
        if (!visible) return;
        const t = (now - t0) / 1000;
        mx += (tx - mx) * 0.05; my += (ty - my) * 0.05;
        const spin = REDUCED ? 0 : t * 0.12;
        root.rotation.y = spin + mx * 0.9; root.rotation.x = my * 0.6 + 0.15;
        ico.rotation.y = -spin * 0.6; ico.rotation.z = spin * 0.3;
        pm.size = 0.045 + Math.sin(t * 2) * 0.008;
        rings.forEach((r) => {
          r.rotation.z = REDUCED ? 0 : t * r.userData.sp * 0.25;
          const a = t * r.userData.sp * 2;
          r.userData.spark.position.set(Math.cos(a) * r.userData.r, Math.sin(a) * r.userData.r, 0);
        });
        ambient.rotation.y = mx * 0.12; ambient.rotation.x = my * 0.08;
        ambient.position.x = REDUCED ? 0 : Math.sin(t * 0.05) * 3;
        chipGroup.rotation.y = -spin * 0.7 + mx * 0.6; chipGroup.rotation.x = my * 0.4;
        chipGroup.updateMatrixWorld();
        const flat = mobileMq.matches;
        anchors.forEach((a, i) => {
          const el = chipRefs.current[i];
          if (!el) return;
          let depth: number;
          let scale: number;
          let alpha: number;
          if (flat) {
            // phones: labels orbit flat around the portrait so they never cover it
            const ang = (i / anchors.length) * Math.PI * 2 + (REDUCED ? 0 : t * 0.12);
            v.set(Math.cos(ang) * 4.75, Math.sin(ang) * 4.35, 0);
            depth = 1; scale = 1; alpha = 1;
          } else {
            v.copy(a).applyMatrix4(chipGroup.matrixWorld);
            depth = v.z;
            scale = 0.8 + ((depth + 4.4) / 8.8) * 0.35;
            alpha = Math.max(0, Math.min(1, (depth + 1.2) / 2.4));
          }
          v.project(cam);
          const sx = (v.x * 0.5 + 0.5) * w - sl;
          const sy = (-v.y * 0.5 + 0.5) * h - st;
          el.style.transform = `translate(${sx}px,${sy}px) translate(-50%,-50%) scale(${scale})`;
          el.style.opacity = alpha.toFixed(2);
          el.style.visibility = alpha < 0.04 ? 'hidden' : 'visible';
          el.style.zIndex = depth > -0.5 ? '4' : '1';
        });
        renderer.render(scene, cam);
      };
      raf = requestAnimationFrame(frame);

      cleanup = () => {
        cancelAnimationFrame(raf);
        ro.disconnect();
        io.disconnect();
        window.removeEventListener('pointermove', onMove);
        renderer.dispose();
        renderer.domElement.remove();
      };
    }).catch(() => { /* 3D is decorative; the page works without it */ });
    return () => { cancelled = true; cleanup(); };
  }, []);

  return (
    <div className="stage" ref={stageRef} aria-hidden="true">
      <div className="portrait"><img src={PORTRAIT} alt="Nasbeer Ahammed" /></div>
      {CHIPS.map((c, i) => (
        <span className="chip3d" key={c} ref={(el: HTMLSpanElement | null) => { chipRefs.current[i] = el; }}>{c}</span>
      ))}
    </div>
  );
}

/* ---------- name that always fits its column ---------- */
function FitName() {
  const box = useRef<HTMLHeadingElement>(null);
  const a = useRef<HTMLSpanElement>(null);
  const b = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    const fit = () => {
      const W = box.current?.clientWidth;
      if (!W) return;
      ([[a.current, 104], [b.current, 176]] as const).forEach(([el, max]) => {
        if (!el) return;
        el.style.fontSize = '100px';
        const natural = el.getBoundingClientRect().width;
        el.style.fontSize = `${Math.min(max, Math.floor(((100 * W) / natural) * 0.98))}px`;
      });
    };
    fit();
    const ro = new ResizeObserver(fit);
    if (box.current) ro.observe(box.current);
    document.fonts?.ready.then(fit);
    return () => ro.disconnect();
  }, []);
  return (
    <h1 className="name" ref={box}>
      <span className="l1" ref={a}>Nasbeer</span>
      <span className="l2" ref={b}>Ahammed</span>
    </h1>
  );
}

/* ---------- small canvas visuals for the skill pillars ---------- */
function PillarVis({ kind }: { kind: Pillar['kind'] }) {
  const ref = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const cv = ref.current;
    const ctx = cv?.getContext('2d');
    if (!cv || !ctx) return;
    let raf = 0, W = 0, H = 0;
    const dpr = Math.min(window.devicePixelRatio, 2);
    const size = () => { W = cv.clientWidth; H = cv.clientHeight; cv.width = W * dpr; cv.height = H * dpr; ctx.setTransform(dpr, 0, 0, dpr, 0, 0); };
    size();
    const ro = new ResizeObserver(size);
    ro.observe(cv);
    const pts = Array.from({ length: 40 }, () => ({ x: Math.random(), y: Math.random(), vx: (Math.random() - 0.5) * 0.002, vy: (Math.random() - 0.5) * 0.002 }));
    const lines = Array.from({ length: 9 }, (_, i) => ({ w: 0.2 + Math.random() * 0.55, ind: (i % 3) * 0.06, c: Math.random() < 0.3 }));
    let vis = false;
    const io = new IntersectionObserver(([e]) => { vis = e.isIntersecting; });
    io.observe(cv);
    const draw = (now: number) => {
      raf = requestAnimationFrame(draw);
      if (!vis) return;
      const t = now / 1000;
      ctx.clearRect(0, 0, W, H);
      if (kind === 'net') {
        pts.forEach((p) => {
          if (!REDUCED) { p.x += p.vx; p.y += p.vy; }
          if (p.x < 0 || p.x > 1) p.vx *= -1;
          if (p.y < 0 || p.y > 1) p.vy *= -1;
        });
        for (let i = 0; i < pts.length; i++) for (let j = i + 1; j < pts.length; j++) {
          const p = pts[i], q = pts[j];
          const d = Math.hypot((p.x - q.x) * W, (p.y - q.y) * H);
          if (d < 70) {
            ctx.strokeStyle = `rgba(127,216,255,${(1 - d / 70) * 0.5})`;
            ctx.beginPath(); ctx.moveTo(p.x * W, p.y * H); ctx.lineTo(q.x * W, q.y * H); ctx.stroke();
          }
        }
        ctx.fillStyle = '#7fd8ff';
        pts.forEach((p) => { ctx.beginPath(); ctx.arc(p.x * W, p.y * H, 1.8, 0, 7); ctx.fill(); });
      } else if (kind === 'code') {
        const off = REDUCED ? 0 : (t * 14) % 14;
        lines.forEach((l, i) => {
          const y = 14 + i * 14 - off;
          ctx.fillStyle = l.c ? 'rgba(127,216,255,.75)' : 'rgba(47,123,255,.55)';
          ctx.fillRect(24 + l.ind * W, y, l.w * (W - 60), 5);
          ctx.fillStyle = 'rgba(91,103,133,.6)';
          ctx.font = '9px JetBrains Mono, monospace';
          ctx.fillText(String(i + 1).padStart(2, '0'), 6, y + 5);
        });
        ctx.fillStyle = `rgba(127,216,255,${Math.sin(t * 5) > 0 ? 1 : 0})`;
        ctx.fillRect(W * 0.7, H - 28, 7, 12);
      } else {
        const colors = ['rgba(47,123,255,.8)', 'rgba(127,216,255,.6)', 'rgba(140,120,255,.45)'];
        for (let k = 0; k < 3; k++) {
          ctx.beginPath();
          for (let x = 0; x <= W; x += 6) {
            const y = H * 0.55 + Math.sin(x * 0.025 + t * (1 + k * 0.4) + k) * 12 * (1 + k * 0.5) - k * 14;
            if (x) ctx.lineTo(x, y); else ctx.moveTo(x, y);
          }
          ctx.strokeStyle = colors[k];
          ctx.lineWidth = 1.6;
          ctx.stroke();
        }
        ctx.fillStyle = 'rgba(127,216,255,.85)';
        for (let i = 0; i < 6; i++) ctx.fillRect(((i / 6) * W + t * 30) % W, H * 0.2 + (i % 3) * 10, 3, 3);
      }
    };
    raf = requestAnimationFrame(draw);
    return () => { cancelAnimationFrame(raf); ro.disconnect(); io.disconnect(); };
  }, [kind]);
  return <canvas ref={ref} aria-hidden="true" />;
}

/* ---------- 3D tilt ---------- */
function useTilt<E extends HTMLElement>(max = 8) {
  const ref = useRef<E>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el || REDUCED || window.matchMedia('(hover: none)').matches) return;
    const mv = (e: PointerEvent) => {
      const r = el.getBoundingClientRect();
      const px = (e.clientX - r.left) / r.width;
      const py = (e.clientY - r.top) / r.height;
      el.style.transform = `perspective(900px) rotateX(${(0.5 - py) * max}deg) rotateY(${(px - 0.5) * max}deg) translateZ(0)`;
      el.style.setProperty('--mx', `${px * 100}%`);
      el.style.setProperty('--my', `${py * 100}%`);
    };
    const lv = () => { el.style.transform = ''; };
    el.addEventListener('pointermove', mv);
    el.addEventListener('pointerleave', lv);
    return () => { el.removeEventListener('pointermove', mv); el.removeEventListener('pointerleave', lv); };
  }, [max]);
  return ref;
}

function Tags({ tags }: { tags: string[] }) {
  return <div className="tags">{tags.map((t) => <span className="tag" key={t}>{t}</span>)}</div>;
}

function ProjectCard({ p, featured = false }: { p: Project; featured?: boolean }) {
  const ref = useTilt<HTMLElement>(featured ? 6 : 9);
  return (
    <article className="proj rise" ref={ref} style={{ '--h': p.h } as CSSProperties}>
      <div className="art">
        {featured && <span className="badge">★ Featured</span>}
        <span className="mono-mark" aria-hidden="true">{p.m}</span>
      </div>
      <div className="glare" />
      <div className="body">
        <h3>{p.n}</h3>
        <p>{p.d}</p>
        <Tags tags={p.tags} />
        {featured && p.url && (
          <div className="act"><a className="btn primary sm" href={p.url} target="_blank" rel="noopener noreferrer"><ExternalLink size={16} /> Live Demo</a></div>
        )}
        {!featured && p.demo && (
          <div className="act"><a className="lnk" href={p.url ?? LINKS.allProjects} target="_blank" rel="noopener noreferrer"><ExternalLink /> Demo</a></div>
        )}
      </div>
    </article>
  );
}

function PillarCard({ p }: { p: Pillar }) {
  const ref = useTilt<HTMLDivElement>(7);
  return (
    <div className="pillar rise" ref={ref}>
      <div className="vis"><PillarVis kind={p.kind} /></div>
      <h3>{p.t}</h3>
      <p>{p.d}</p>
      <Tags tags={p.tags} />
    </div>
  );
}

function Timeline() {
  const ref = useRef<HTMLDivElement>(null);
  const rail = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const on = () => {
      const el = ref.current;
      if (!el || !rail.current) return;
      const r = el.getBoundingClientRect();
      const p = Math.min(1, Math.max(0, (window.innerHeight * 0.6 - r.top) / r.height));
      rail.current.style.setProperty('--p', `${(p * 100).toFixed(1)}%`);
    };
    on();
    window.addEventListener('scroll', on, { passive: true });
    window.addEventListener('resize', on);
    return () => { window.removeEventListener('scroll', on); window.removeEventListener('resize', on); };
  }, []);
  return (
    <div className="tl" ref={ref}>
      <div className="rail" ref={rail}><i /></div>
      {JOBS.map((j) => (
        <div className={`job rise${j.now ? ' now' : ''}`} key={j.when}>
          <span className="node" />
          <div>
            <div className="when">{j.when}</div>
            <div className="where"><MapPin /> {j.loc}</div>
          </div>
          <div className="job-card">
            <h3>{j.role}</h3>
            <div className="co">{j.co}</div>
            <ul>{j.b.map((b) => <li key={b}>{b}</li>)}</ul>
          </div>
        </div>
      ))}
    </div>
  );
}

function Certs() {
  const [f, setF] = useState('All');
  return (
    <div>
      <div className="filters" role="group" aria-label="Filter certifications">
        {FILTERS.map((x) => (
          <button key={x} type="button" aria-pressed={f === x} onClick={() => setF(x)}>{x}</button>
        ))}
      </div>
      <div className="certs">
        {CERTS.map((c) => (
          <div className={`cert${f === 'All' || c.c.includes(f) ? '' : ' out'}`} key={c.t}>
            <div className="cert-in">
              <div className="medal"><Award /></div>
              <h4>{c.t}</h4>
              <div className="by">{c.by}</div>
              <span className="tag">{c.tag}</span>
            </div>
          </div>
        ))}
      </div>
      <div className="cstats">
        <div className="cstat"><div className="medal" style={{ margin: '0 auto 12px' }}><Trophy /></div><b>11+</b><small>Certifications</small></div>
        <div className="cstat"><div className="medal" style={{ margin: '0 auto 12px' }}><Award /></div><b>6</b><small>Platforms</small></div>
        <div className="cstat"><div className="medal" style={{ margin: '0 auto 12px' }}><ExternalLink /></div><b>10+</b><small>Skill Areas</small></div>
      </div>
    </div>
  );
}

function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('home');
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const on = () => {
      setScrolled(window.scrollY > 20);
      let cur = 'home';
      NAV.forEach(([id]) => {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top < window.innerHeight * 0.35) cur = id;
      });
      setActive(cur);
    };
    on();
    window.addEventListener('scroll', on, { passive: true });
    return () => window.removeEventListener('scroll', on);
  }, []);
  return (
    <header className={`nav${scrolled || open ? ' scrolled' : ''}`}>
      <div className="wrap">
        <a className="logo" href="#home">NASBEER<b>.</b></a>
        <nav className="links" aria-label="Main">
          {NAV.map(([id, l]) => <a key={id} href={`#${id}`} className={active === id ? 'on' : ''}>{l}</a>)}
        </nav>
        <a className="btn primary sm hire" href="#contact">Hire Me</a>
        <button type="button" className="menu-btn" aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} onClick={() => setOpen(!open)}>
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>
      <div className={`mobile-menu${open ? ' open' : ''}`}>
        {NAV.map(([id, l]) => <a key={id} href={`#${id}`} onClick={() => setOpen(false)}>{l}</a>)}
        <a href="#contact" onClick={() => setOpen(false)} style={{ color: 'var(--blue)', fontWeight: 600 }}>Hire Me →</a>
      </div>
    </header>
  );
}

export default function Portfolio() {
  useFonts();
  const half = Math.ceil(TECH.length / 2);
  const rowA = [...TECH, ...TECH];
  const rowBBase = [...TECH.slice(half), ...TECH.slice(0, half)];
  const rowB = [...rowBBase, ...rowBBase];

  return (
    <div className="nx">
      <div className="noise" aria-hidden="true" />
      <div className="glow" aria-hidden="true" style={{ background: '#2f7bff', left: '-20vmax', top: '-20vmax' }} />
      <div className="glow" aria-hidden="true" style={{ background: '#1fb5ff', right: '-25vmax', top: '30vh', opacity: 0.12 }} />
      <Nav />
      <main>
        <section className="hero" id="home">
          <div className="wrap">
            <div className="hero-copy">
              <span className="status"><span className="dot" />Open to new projects</span>
              <FitName />
              <p className="tagline">Shipping Mobile Apps with AI Inside<span className="cursor" aria-hidden="true" /></p>
              <p className="lede">10+ years of experience in AI/ML, data science, and full-stack application development. Building scalable web and mobile applications using React, React Native, Node.js, and Python. Expert in LLMs, RAG architectures, and cloud-native solutions.</p>
              <div className="cta">
                <a className="btn primary" href="#projects">Explore My Work <ExternalLink size={16} /></a>
                <a className="btn ghost" href="#contact">Get In Touch</a>
              </div>
              <div className="socials">
                <a className="ico" href={LINKS.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub"><Github /></a>
                <a className="ico" href={LINKS.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><Linkedin /></a>
                <a className="ico" href="#projects" aria-label="Projects"><Code2 /></a>
              </div>
            </div>
            <HeroCore />
          </div>
          <a className="scroll-cue" href="#about"><span>SCROLL</span><i /></a>
        </section>

        <section id="about">
          <div className="wrap">
            <div className="head"><div className="eyebrow">whoami · About me</div><h2 className="h2">Who am <em>I?</em></h2></div>
            <div className="about-grid">
              <p className="about-text rise">I build AI applications and full-stack products end to end — <mark>React and Next</mark> on the front, <mark>Node and Python</mark> on the back, <mark>React Native</mark> for mobile, and the observability to keep it all honest. Ten years of shipping things that hold up when real users show up.</p>
              <div className="stats rise">
                <div className="stat"><b>10<span>+</span></b><small>Years Experience</small></div>
                <div className="stat"><b>50<span>+</span></b><small>Projects Delivered</small></div>
                <div className="stat"><b>12<span>+</span></b><small>Mobile Apps Built</small></div>
              </div>
            </div>
            <div className="pillars">{PILLARS.map((p) => <PillarCard key={p.t} p={p} />)}</div>
            <div className="tech-label">Technologies I work with</div>
          </div>
          <div className="marquee" aria-label={`Technologies: ${TECH.join(', ')}`}>
            <div className="track">{rowA.map((t, i) => <span className="tech" key={`a${i}`}>{t}</span>)}</div>
            <div className="track rev">{rowB.map((t, i) => <span className="tech" key={`b${i}`}>{t}</span>)}</div>
          </div>
        </section>

        <section id="projects">
          <div className="wrap">
            <div className="head">
              <div className="eyebrow">ls ~/projects · Portfolio</div>
              <h2 className="h2">What did I <em>build?</em></h2>
              <p className="sub">A collection of enterprise-grade applications, AI-powered platforms, and mobile solutions built with cutting-edge technologies.</p>
            </div>
            <div className="feat">{FEATURED.map((p) => <ProjectCard key={p.n} p={p} featured />)}</div>
            <div className="grid3">{PROJECTS.map((p) => <ProjectCard key={p.n} p={p} />)}</div>
            <div className="more"><a className="btn ghost" href={LINKS.allProjects} target="_blank" rel="noopener noreferrer">View All Projects <ArrowRight size={16} /></a></div>
          </div>
        </section>

        <section id="experience">
          <div className="wrap">
            <div className="head">
              <div className="eyebrow">git log --career · Experience</div>
              <h2 className="h2">Work <em>experience</em></h2>
              <p className="sub">Professional experience building enterprise platforms, AI solutions, and leading cross-functional engineering teams.</p>
            </div>
            <div className="acc rise">
              <h3><span className="medal" style={{ margin: 0 }}><Award /></span>Key Accomplishments</h3>
              <ul>{ACCOMPLISH.map((a) => <li key={a}>{a}</li>)}</ul>
            </div>
            <Timeline />
          </div>
        </section>

        <section id="certifications">
          <div className="wrap">
            <div className="head center">
              <div className="eyebrow">cat certs/* · Achievements</div>
              <h2 className="h2">Certifications <em>&amp; badges</em></h2>
              <p className="sub">Professional certifications and achievements that validate my expertise in various technologies and methodologies.</p>
            </div>
            <Certs />
          </div>
        </section>

        <section id="contact" className="contact">
          <div className="wrap">
            <div className="head center" style={{ marginBottom: 0 }}>
              <div className="eyebrow">ping nasbeer · Get in touch</div>
              <h2 className="h2">Let's build the <em>future</em></h2>
              <p className="sub">I am available on almost every social media. You can message me, I will reply within 24 hours. I can help you with Data Science, Python, React, WordPress, Cloud and Open Source Development.</p>
            </div>
            <div className="mail rise">
              <div className="medal"><Mail /></div>
              <div className="t">
                <strong style={{ fontFamily: 'var(--display)', fontSize: 20 }}>Let's Work Together</strong>
                <small>Send me an email at</small>
                <a id="email-text" href={`mailto:${EMAIL}`}>{EMAIL}</a>
              </div>
              <div className="ops"><button type="button" className="btn ghost sm" onClick={copyEmail} aria-label="Copy email address"><Copy size={16} /> Copy</button></div>
            </div>
            <div className="connect-label">✦ Connect with me ✦</div>
            <div className="soc">
              {SOCIAL.map(([k, n, s]) => {
                const Icon = SOCIAL_ICON[k];
                return (
                  <a key={k} href={LINKS[k]} target="_blank" rel="noopener noreferrer">
                    <span className="ico"><Icon /></span><strong>{n}</strong><small>{s}</small>
                  </a>
                );
              })}
            </div>
            <div className="based"><MapPin /> Based in India • Available Worldwide</div>
          </div>
        </section>
      </main>

      <footer>
        <div className="wrap fgrid">
          <div>
            <div className="logo" style={{ fontSize: 26 }}>NASBEER<b>.</b></div>
            <p>Senior Full Stack Engineer &amp; AI Specialist specializing in AI-powered solutions, modern web development, and intuitive user experiences.</p>
            <div className="made">Made with <b>♥</b> using React &amp; Three.js</div>
          </div>
          <div><h5>Quick Links</h5><ul>{NAV.map(([id, l]) => <li key={id}><a href={`#${id}`}>{l}</a></li>)}</ul></div>
          <div><h5>Services</h5><ul>{SERVICES.map((s) => <li key={s}><span>{s}</span></li>)}</ul></div>
        </div>
        <div className="wrap fbar">
          <span>© {new Date().getFullYear()} Nasbeer Ahammed. All rights reserved.</span>
          <button type="button" className="top" onClick={() => window.scrollTo({ top: 0, behavior: REDUCED ? 'auto' : 'smooth' })}>Back to top <span><ArrowUp size={16} /></span></button>
        </div>
      </footer>
      <div className="toast" id="nx-toast" role="status" aria-live="polite" />
    </div>
  );
}
