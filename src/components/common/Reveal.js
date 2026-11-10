import React, { useEffect, useRef, useState } from "react";

function Reveal({ as = "div", children, className = "", delay = 0, ...props }) {
  const elementRef = useRef(null);
  const [visible, setVisible] = useState(false);
  const Component = as;

  useEffect(() => {
    const element = elementRef.current;
    if (!element || typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px" }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <Component
      ref={elementRef}
      {...props}
      className={`scroll-reveal${visible ? " scroll-reveal--visible" : ""}${className ? ` ${className}` : ""}`}
      style={{ "--reveal-delay": `${delay}ms` }}
    >
      {children}
    </Component>
  );
}

export default Reveal;
