import { useRef, useState } from "react";
import { Instagram, Sparkles, Gift } from "lucide-react";

const REWARDS = [
  { label: "Free Aam Pana", color: "#FFC107" },
  { label: "10% Off", color: "#0B1F4D" },
  { label: "Free Chach", color: "#7ED321" },
  { label: "Buy 1 Get 1", color: "#6F4E37" },
  { label: "Free Coffee", color: "#FFC107" },
  { label: "Try Again", color: "#0B1F4D" },
  { label: "20% Off", color: "#7ED321" },
  { label: "Free Delivery", color: "#6F4E37" },
];

export function SpinWin() {
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [spinning, setSpinning] = useState(false);
  const [result, setResult] = useState<string | null>(null);
  const [angle, setAngle] = useState(0);
  const wheelRef = useRef<HTMLDivElement>(null);

  const handleSpin = (e: React.FormEvent) => {
    e.preventDefault();
    if (!/^\d{10}$/.test(mobile)) return;
    const used = JSON.parse(localStorage.getItem("tb_spins") || "[]") as string[];
    if (used.includes(mobile)) {
      setResult("You already spun! Share on Instagram for an extra spin.");
      return;
    }
    setSpinning(true);
    setResult(null);
    const winIdx = Math.floor(Math.random() * REWARDS.length);
    const segment = 360 / REWARDS.length;
    const target = 360 * 6 + (360 - winIdx * segment - segment / 2);
    setAngle(target);
    setTimeout(() => {
      setSpinning(false);
      const reward = REWARDS[winIdx].label;
      const code = `TB${Math.random().toString(36).slice(2, 7).toUpperCase()}`;
      setResult(reward === "Try Again" ? "Better luck next time! 🥲" : `🎉 You won ${reward}! Code: ${code}`);
      localStorage.setItem("tb_spins", JSON.stringify([...used, mobile]));
    }, 4200);
  };

  const segment = 360 / REWARDS.length;

  return (
    <section id="spin" className="relative py-20 sm:py-28 bg-hero text-white overflow-hidden">
      <div className="absolute top-10 left-10 size-32 bg-lime/20 blur-3xl rounded-full" />
      <div className="absolute bottom-10 right-10 size-40 bg-mango/20 blur-3xl rounded-full" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 grid lg:grid-cols-2 gap-12 items-center">
        <div className="text-center lg:text-left">
          <span className="inline-flex items-center gap-2 rounded-full bg-lime/20 text-lime px-3 py-1 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="size-3" /> Gamified Rewards
          </span>
          <h2 className="mt-4 text-4xl sm:text-5xl font-extrabold text-balance">
            Spin & Win <span className="text-lime">Free Drinks</span>
          </h2>
          <p className="mt-3 text-white/70 max-w-md mx-auto lg:mx-0">
            One spin per mobile number. Coupons auto-generated. Share on Instagram to earn an extra spin.
          </p>

          <form onSubmit={handleSpin} className="mt-8 glass rounded-2xl p-5 space-y-3 max-w-md mx-auto lg:mx-0">
            <input
              type="text"
              required
              maxLength={50}
              placeholder="Your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full rounded-xl bg-white/10 border border-white/15 px-4 py-3 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-lime"
            />
            <input
              type="tel"
              required
              pattern="[0-9]{10}"
              maxLength={10}
              placeholder="10-digit mobile number"
              value={mobile}
              onChange={(e) => setMobile(e.target.value.replace(/\D/g, ""))}
              className="w-full rounded-xl bg-white/10 border border-white/15 px-4 py-3 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-lime"
            />
            <button
              type="submit"
              disabled={spinning}
              className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-lime-grad text-lime-foreground px-5 py-3.5 font-extrabold shadow-glow disabled:opacity-60 hover:scale-[1.02] transition-transform"
            >
              <Gift className="size-5" />
              {spinning ? "Spinning..." : "Spin the Wheel"}
            </button>
            {result && (
              <div className="text-center mt-2 rounded-xl bg-white/10 border border-lime/40 px-4 py-3 text-sm font-semibold text-lime">
                {result}
              </div>
            )}
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-2 text-xs text-white/60 hover:text-white transition-colors pt-1"
            >
              <Instagram className="size-3.5" /> Share on Instagram for an extra spin
            </a>
          </form>
        </div>

        {/* Wheel */}
        <div className="relative mx-auto">
          <div className="relative size-[320px] sm:size-[400px] lg:size-[460px]">
            <div className="absolute -inset-4 rounded-full bg-lime/20 blur-2xl animate-pulse" />
            {/* Pointer */}
            <div className="absolute left-1/2 -top-2 -translate-x-1/2 z-20">
              <div className="size-0 border-x-[14px] border-x-transparent border-t-[24px] border-t-mango drop-shadow-lg" />
            </div>
            <div
              ref={wheelRef}
              className="absolute inset-0 rounded-full overflow-hidden shadow-2xl ring-8 ring-white/90"
              style={{
                transform: `rotate(${angle}deg)`,
                transition: spinning ? "transform 4s cubic-bezier(0.17, 0.67, 0.21, 0.99)" : "none",
              }}
            >
              <svg viewBox="0 0 200 200" className="w-full h-full">
                {REWARDS.map((r, i) => {
                  const start = (i * segment - 90) * (Math.PI / 180);
                  const end = ((i + 1) * segment - 90) * (Math.PI / 180);
                  const x1 = 100 + 100 * Math.cos(start);
                  const y1 = 100 + 100 * Math.sin(start);
                  const x2 = 100 + 100 * Math.cos(end);
                  const y2 = 100 + 100 * Math.sin(end);
                  const mid = (i * segment + segment / 2 - 90) * (Math.PI / 180);
                  const tx = 100 + 62 * Math.cos(mid);
                  const ty = 100 + 62 * Math.sin(mid);
                  return (
                    <g key={i}>
                      <path
                        d={`M100,100 L${x1},${y1} A100,100 0 0,1 ${x2},${y2} Z`}
                        fill={r.color}
                      />
                      <text
                        x={tx}
                        y={ty}
                        fill={r.color === "#FFC107" || r.color === "#7ED321" ? "#0B1F4D" : "#fff"}
                        fontSize="9"
                        fontWeight="800"
                        textAnchor="middle"
                        transform={`rotate(${(i * segment + segment / 2)}, ${tx}, ${ty})`}
                      >
                        {r.label}
                      </text>
                    </g>
                  );
                })}
              </svg>
            </div>
            {/* Hub */}
            <div className="absolute inset-1/2 -translate-x-1/2 -translate-y-1/2 size-16 rounded-full bg-white shadow-xl flex items-center justify-center z-10">
              <Sparkles className="size-6 text-primary" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
