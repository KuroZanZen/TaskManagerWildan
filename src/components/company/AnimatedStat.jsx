import { useState, useEffect, useRef } from "react";

const AnimatedStat = ({ end, label, suffix = "" }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
        }
      },
      { threshold: 0.5 },
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [hasAnimated]);

  useEffect(() => {
    if (!hasAnimated) return;

    // Use a simplified duration logic
    const duration = 2000; // 2 seconds
    const steps = 60;
    const intervalTime = duration / steps;
    const increment = end / steps;

    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, intervalTime);

    return () => clearInterval(timer);
  }, [hasAnimated, end]);

  return (
    <div ref={ref} className="text-center">
      <div className="text-4xl font-bold text-yellow-500 mb-2">
        {count.toLocaleString()}
        {suffix}
      </div>
      <div className="text-gray-400">{label}</div>
    </div>
  );
};

export default AnimatedStat;
