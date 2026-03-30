import React from 'react';

export default function HeroBackdrop() {
  return (
    <div className="hero-backdrop" aria-hidden>
      <div className="hero-backdrop__grid" />
      <span className="hero-backdrop__corner hero-backdrop__corner--tl" />
      <span className="hero-backdrop__corner hero-backdrop__corner--tr" />
      <span className="hero-backdrop__corner hero-backdrop__corner--bl" />
      <span className="hero-backdrop__corner hero-backdrop__corner--br" />
    </div>
  );
}
