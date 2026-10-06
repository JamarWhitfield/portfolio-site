"use client";

import { useEffect, useRef, type ReactNode } from "react";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export function TrackedProject({
  title,
  className,
  children
}: {
  title: string;
  className: string;
  children: ReactNode;
}) {
  const articleRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const article = articleRef.current;
    if (!article) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting && entry.intersectionRatio >= 0.25)) {
          window.gtag?.("event", "project_view", { project_title: title });
          observer.disconnect();
        }
      },
      { threshold: 0.25 }
    );

    observer.observe(article);
    return () => observer.disconnect();
  }, [title]);

  return (
    <article ref={articleRef} className={className}>
      {children}
    </article>
  );
}

export function TrackedResumeLink({ href, className }: { href: string; className: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className={className}
      onClick={() => window.gtag?.("event", "resume_click")}
    >
      Resume
    </a>
  );
}
