export default function SystemDiagram() {
  return (
    <figure className="mx-auto max-w-[900px]">
      <div className="grid gap-8 md:grid-cols-2">
        {/* Wrong system */}
        <svg
          viewBox="0 0 360 300"
          role="img"
          aria-labelledby="wrong-title wrong-desc"
          className="w-full"
        >
          <title id="wrong-title">The right employee in the wrong system</title>
          <desc id="wrong-desc">
            A capable employee enters a system with unclear responsibilities, poor reporting
            lines, missing SOPs and limited documentation.
          </desc>
          <defs>
            <marker id="arrowL" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto">
              <path d="M0 0 L10 5 L0 10 z" className="fill-ink" />
            </marker>
          </defs>
          <text x="180" y="26" textAnchor="middle" fontSize="18" fontWeight="700" className="fill-deep">
            Wrong system
          </text>
          <circle cx="55" cy="150" r="16" className="fill-flame" />
          <path d="M29 208 Q29 172 55 172 Q81 172 81 208 Z" className="fill-flame" />
          <text x="55" y="232" textAnchor="middle" fontSize="14" className="fill-ink">Capable</text>
          <text x="55" y="250" textAnchor="middle" fontSize="14" className="fill-ink">employee</text>
          <path d="M92 180 L136 180" className="stroke-ink" strokeWidth="2" fill="none" markerEnd="url(#arrowL)" />
          {[
            [148, 50, "Unclear responsibilities"],
            [158, 105, "Poor reporting lines"],
            [148, 160, "Missing SOPs"],
            [158, 215, "Limited documentation"],
          ].map(([x, y, label]) => (
            <g key={label as string}>
              <rect x={x as number} y={y as number} width="194" height="40" rx="6"
                strokeWidth="2" strokeDasharray="6 5" className="fill-none stroke-ink/50" />
              <text x={(x as number) + 97} y={(y as number) + 25} textAnchor="middle" fontSize="14" className="fill-ink">
                {label}
              </text>
            </g>
          ))}
        </svg>

        {/* Right system */}
        <svg
          viewBox="0 0 360 300"
          role="img"
          aria-labelledby="right-title right-desc"
          className="w-full"
        >
          <title id="right-title">The same employee in a clear system</title>
          <desc id="right-desc">
            The same employee enters a system with defined roles, clear reporting lines, SOPs
            and documentation, and KPIs and accountability.
          </desc>
          <defs>
            <marker id="arrowR" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto">
              <path d="M0 0 L10 5 L0 10 z" className="fill-sea" />
            </marker>
          </defs>
          <text x="180" y="26" textAnchor="middle" fontSize="18" fontWeight="700" className="fill-deep">
            Right system
          </text>
          <circle cx="55" cy="150" r="16" className="fill-flame" />
          <path d="M29 208 Q29 172 55 172 Q81 172 81 208 Z" className="fill-flame" />
          <text x="55" y="232" textAnchor="middle" fontSize="14" className="fill-ink">Same</text>
          <text x="55" y="250" textAnchor="middle" fontSize="14" className="fill-ink">employee</text>
          <path d="M92 180 L136 180" className="stroke-sea" strokeWidth="2" fill="none" markerEnd="url(#arrowR)" />
          {["Defined roles", "Clear reporting lines", "SOPs & documentation", "KPIs & accountability"].map(
            (label, i) => (
              <g key={label}>
                <rect x="150" y={50 + i * 55} width="194" height="38" rx="6"
                  strokeWidth="2" className="fill-mist stroke-sea" />
                <text x="247" y={50 + i * 55 + 24} textAnchor="middle" fontSize="14" className="fill-deep">
                  {label}
                </text>
                {i < 3 && (
                  <line x1="247" y1={50 + i * 55 + 38} x2="247" y2={50 + (i + 1) * 55}
                    strokeWidth="2" className="stroke-sea" />
                )}
              </g>
            )
          )}
        </svg>
      </div>
      <figcaption className="mt-6 text-center text-ink">
        The same person performs differently depending on the system around them.
      </figcaption>
    </figure>
  );
}