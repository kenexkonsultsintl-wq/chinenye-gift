import Image from "next/image";

// The bridge arch is the site's one signature shape: portrait frame + drawn outline.
// `position` controls which part of the photo stays in frame (e.g. "object-top" for full-length shots).
export function ArchPortrait({
  src,
  alt,
  position = "object-center",
}: {
  src?: string;
  alt: string;
  position?: string;
}) {
  return (
    <div className="relative mx-auto w-full max-w-[400px]">
      <svg
        viewBox="0 0 400 520"
        className="pointer-events-none absolute -right-4 -top-4 h-full w-full"
        fill="none"
        aria-hidden="true"
      >
        <path
          className="arch-line"
          pathLength={1}
          d="M6 514 V200 A194 194 0 0 1 394 200 V514"
          stroke="#F26A21"
          strokeWidth="3"
          strokeLinecap="round"
        />
      </svg>
      <div className="relative aspect-[400/520] overflow-hidden rounded-t-full bg-mist">
        {src ? (
          <Image
            src={src}
            alt={alt}
            fill
            priority
            sizes="(min-width: 1024px) 400px, 80vw"
            className={`object-cover ${position}`}
          />
        ) : (
          <div className="flex h-full items-end justify-center pb-10 text-center text-sm text-deep/60">
            Portrait photo goes here
          </div>
        )}
      </div>
    </div>
  );
}