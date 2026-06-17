
export default function Home() {
  return (
    <div className="relative">
      <svg className="absolute top-0 left-0 text-accent -z-10 w-full h-full" viewBox="0 0 600 400" preserveAspectRatio="none">
        <path
            d="M 0 50 Q 50 50, 80 100 Q 150 220, 180 250 Q  200 290, 230 300 Q 260 320, 280 345 Q 300 360, 350 390"

              stroke="currentColor"
              strokeWidth="1"
              fill="none"
        />
      </svg>
    <div className="flex justify-between items-start max-w-5xl mx-auto">
        <div className="mt-14 text-accent text-9xl font-light leading-none font-[family-name:var(--font-fraunces)]">
          <div>PO</div>
          <div className="ml-30">RT</div>
          <div className="ml-60">FO</div>
          <div className="ml-90">LIO</div>
        </div>
      <div className="mt-4">
      <h2 className="mt-50">Kaia Hellem</h2>
      <p className="mt-4">Utvikler med sans for å bygge ting som funker og ser bra ut.</p>
   </div>
   </div>
   </div>
  )
}