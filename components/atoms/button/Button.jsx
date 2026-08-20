"use client";

import Link from "next/link";
import React from "react";
import { ArrowRightIcon, LeftArrowIcon, RightArrowIcon } from "../../../components/SvgIcon";

const variantStyles = {
  glow: "border border-blue-500/25 bg-blue-700 rounded-lg text-title shadow-[0_0_24px_rgba(37,99,235,0.55)] hover:bg-blue-600 hover:shadow-[0_0_28px_rgba(37,99,235,0.8)]",
  light:
    "border border-white/70 bg-white text-slate-950 rounded-lg shadow-[0_10px_24px_rgba(15,23,42,0.12)] hover:bg-slate-50 hover:border-white",
  muted:
    "border border-white/10 bg-white/12 text- backdrop-blur-md hover:bg-white/16 rounded-lg",
  dark: "border border-slate-600/80 bg-slate-600 text-title shadow-[0_14px_24px_rgba(15,23,42,0.2)] hover:bg-slate-500 rounded-lg",
  darkAccent:
    "border border-blue-500/20 bg-slate-700 text-title shadow-[0_0_18px_rgba(30,64,175,0.28)] hover:bg-slate-600 rounded-lg",
  apple:
    "border border-white/10 bg-slate-600 text-title shadow-[0_14px_28px_rgba(15,23,42,0.25)] hover:bg-slate-500 rounded-lg",
  testimonial:
    "flex cursor-pointer items-center justify-center rounded-full border border-white/10 bg-[#050511] text-title transition-all duration-300 hover:border-blue-500/50 hover:bg-blue-500/10",
};

const sizeStyles = {
  sm: "h-10 px-4 text-sm",
  md: "h-11 px-5 text-base",
  lg: "h-12 px-6 text-[15px]",
  xl: "h-14 px-7 text-base sm:text-lg",
  square: "h-12 w-12 p-0",
};

const baseStyles =
  "inline-flex items-center justify-center gap-2  font-medium transition-all duration-300 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/70 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent active:translate-y-[1px]";

function ArrowIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      className="h-4 w-4 shrink-0"
    >
      <path
        d="M5 12h13m0 0-5-5m5 5-5 5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Button({
  children,
  href,
  onClick,
  target,
  rel,
  variant = "glow",
  size = "md",
  icon,
  iconPosition = "right",
  fullWidth = false,
  disabled = false,
  className = "",
  ariaLabel,
}) {
  const styles = [
    baseStyles,
    variantStyles[variant] || variantStyles.glow,
    sizeStyles[size] || sizeStyles.md,
    fullWidth ? "w-full" : "w-fit",
    disabled ? "cursor-not-allowed opacity-50 hover:translate-y-0" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const content = (
    <>
      {icon && iconPosition === "left" ? icon : null}
      <span className="whitespace-nowrap">{children}</span>
      {icon && iconPosition !== "left" ? icon : null}
    </>
  );

  if (!href || disabled) {
    return (
      <button
        type="button"
        aria-label={ariaLabel}
        disabled={disabled}
        onClick={onClick}
        className={styles}
      >
        {content}
      </button>
    );
  }

  return (
    <Link
      href={href}
      target={target}
      rel={rel}
      onClick={onClick}
      aria-label={ariaLabel}
      className={styles}
    >
      {content}
    </Link>
  );
}

export function GlowButton({
  buttonText,
  buttonLink = "#",
  onClick,
  target = "_self",
  className = "",
}) {
  return (
    <Button
      href={buttonLink}
      onClick={onClick}
      target={target}
      variant="glow"
      size="md"
      className={className}
      icon={<ArrowRightIcon size={20}/>}
    >
      {buttonText}
    </Button>
  );
}

export function WhiteButton({ buttonText, buttonLink, icon, className }) {
  return (
    <Button
      href={buttonLink}
      variant="light"
      size="md"
      icon={icon}
      className={className}
    >
      {buttonText}
    </Button>
  );
}

export function HeaderButton({ buttonText, buttonLink, onClick, className }) {
  return (
    <Button
      href={buttonLink}
      onClick={onClick}
      variant="glow"
      size="sm"
      fullWidth
      className={className}
      icon={<ArrowRightIcon size={20}/>}
    >
      {buttonText}
    </Button>
  );
}

export function HeroButton({
  FirstHeroButtonText,
  FirstHeroButtonLink,
  SecondHeroButtonText,
  SecondHeroButtonLink,
}) {
  return (
    <div className="mt-6 flex w-full flex-col gap-3 sm:mt-8 sm:w-auto sm:flex-row">
      <Button
        href={FirstHeroButtonLink}
        variant="light"
        size="lg"
        fullWidth
        className="sm:min-w-[180px] rounded-lg"
      >
        {FirstHeroButtonText}
      </Button>
      <Button
        href={SecondHeroButtonLink}
        variant="muted"
        size="lg"
        fullWidth
        className="sm:min-w-[180px] rounded-lg text-title"
      >
        {SecondHeroButtonText}
      </Button>
    </div>
  );
}

export function ButtonGroup({ children, className = "" }) {
  return (
    <div
      className={`flex w-full flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center ${className}`.trim()}
    >
      {children}
    </div>
  );
}

export function TestimonialButton({ direction = "left", onClick, ariaLabel, className = "" }) {
  const leftSvg = (
    <LeftArrowIcon size={22} />
  );

  const rightSvg = (
    <RightArrowIcon size={22} />
  );

  return (
    <Button onClick={onClick} ariaLabel={ariaLabel} variant="testimonial" size="square" className={className}>
      {direction === "left" ? leftSvg : rightSvg}
    </Button>
  );
}

