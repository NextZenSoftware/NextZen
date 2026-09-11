export default function Loading() {
  return (
    <div
      className="flex min-h-[60vh] items-center justify-center px-6"
      role="status"
      aria-live="polite"
      aria-label="Loading page"
    >
      <div className="flex w-full max-w-sm flex-col items-center gap-5 text-center">
        <div className="relative h-12 w-12" aria-hidden="true">
          <span className="absolute inset-0 rounded-full border-4 border-primary-100" />
          <span className="absolute inset-0 animate-spin rounded-full border-4 border-transparent border-t-primary-600" />
        </div>
        <div className="w-full space-y-3">
          <div className="mx-auto h-3 w-32 animate-pulse rounded-full bg-slate-200" />
          <div className="h-2 w-full animate-pulse rounded-full bg-slate-100" />
          <div className="mx-auto h-2 w-4/5 animate-pulse rounded-full bg-slate-100" />
        </div>
        <span className="text-sm text-slate-500">Loading NextzenSoftware</span>
      </div>
    </div>
  )
}