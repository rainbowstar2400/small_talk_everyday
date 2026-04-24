export default function Home() {
  return (
    <main className="flex flex-1 items-center justify-center p-8">
      <div className="flex flex-col items-center gap-4 text-center">
        <p className="text-sm font-medium tracking-widest text-sky-600 uppercase">
          Small Talk Everyday
        </p>
        <h1 className="text-3xl font-semibold text-slate-800 sm:text-4xl">
          毎日10分の英語スピーキング
        </h1>
        <p className="text-base text-slate-500">トップページ（開発中）</p>
        <p className="mt-4 text-xs text-slate-400">
          ※ 仮のトップページです。コンテンツは順次追加予定。
        </p>
      </div>
    </main>
  );
}
