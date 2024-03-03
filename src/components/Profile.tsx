import MyImage from "../assets/image/MyImage.PNG";

const Profile = () => {
  return (
    <section className=" min-w-full  py-10">
      <article className="container mx-auto grid grid-cols-1 place-items-center gap-3 px-3">
        <h2 className="text-2xl font-bold text-primary">
          <span>Profile</span>
        </h2>
        {/* profile container */}
        <div className=" grid grid-cols-1 place-items-center gap-5 rounded-md border-2 border-secondary bg-slate-50 p-8">
          {/* image container */}
          <div className="size-20">
            {/* image */}
            <img
              src={MyImage}
              alt=""
              className=" size-full rounded-[50%] bg-sky-600 object-cover"
            />
          </div>
          <div className="grid grid-cols-1 place-items-start gap-3 text-sm ">
            {/* intro container */}
            {/* birthday */}
            {/* now */}
            {/* hobby */}
            <p>1999年生まれ。 フロントエンドエンジニアを目指しています</p>
            <p>
              2021年からプログラミングを始め、
              現在は主にReactとTypeScriptを学んでいます
            </p>
            <p>趣味はゲームと野球観戦</p>
          </div>
        </div>
      </article>
    </section>
  );
};

export default Profile;
