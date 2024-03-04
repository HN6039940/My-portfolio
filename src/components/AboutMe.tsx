import React from "react";

const AboutMe = () => {
  return (
    <section className="  min-w-full py-10">
      {/* aboutme container */}
      <article className=" container mx-auto grid grid-cols-1 place-items-center gap-8 px-3">
        {/* aboutme title */}
        <h2 className=" text-3xl font-bold text-primary"> about me</h2>
        <div className="py- grid grid-cols-1 place-items-center gap-5 ">
          {/* grid container */}
          {/* aboutme content */}
          <div className="grid w-full grid-cols-1 gap-3 rounded-md border-2 border-tertiary bg-slate-50 px-3 py-4">
            <h2 className=" text-xl font-bold text-tertiary">責任感と適応力</h2>
            <div>
              <p className="  text-quaternary">
                与えられた仕事に対して真剣に取り組み
                困難な状況に直面しても、目標達成に向けて努力をしています。
                そして新しい環境でもその強みを活かしていきたいです。
              </p>
            </div>
          </div>
          <div className="grid w-full grid-cols-1 gap-3 rounded-md border-2 border-tertiary bg-slate-50 px-3 py-4">
            <h2 className=" text-xl font-bold text-tertiary">学習と挑戦</h2>
            <div>
              <p className="  text-quaternary">
                HTML、CSS、JavaScriptからスタートし、
                現在はReactやNode.jsなどを勉強中です。
                スキルの向上と高品質なコードを書けるように学習しています。
              </p>
            </div>
          </div>
          <div className="grid w-full grid-cols-1 gap-3 rounded-md border-2 border-tertiary bg-slate-50 px-3 py-4">
            <h2 className=" text-xl font-bold text-tertiary">将来の展望</h2>
            <div>
              <p className="  text-quaternary">
                フロントエンド開発者としてのキャリアを積み重ね、
                幅広いプロジェクトに貢献したいと考えています ブラウザを用いた
                クライアント側の業務に携わりです。
              </p>
            </div>
          </div>
          <div className="grid w-full grid-cols-1 gap-3 rounded-md border-2 border-tertiary bg-slate-50 px-3 py-4">
            <h2 className=" text-xl font-bold text-tertiary">
              目標とするエンジニア像
            </h2>
            <p className="  text-quaternary">
              ユーザーにとって使いやすいサイトを作り、
              また、エンジニアとしてのスキルを磨き、
              チームでの開発に貢献できるようなエンジニアになりたいです。
            </p>
          </div>
        </div>
      </article>
    </section>
  );
};

export default AboutMe;
