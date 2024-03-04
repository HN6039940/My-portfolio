import MyImage from "../assets/image/MyImage.PNG";

const Profile = () => {
  return (
    <section className=" min-w-full  py-10">
      <article className="container mx-auto grid grid-cols-1 place-items-center gap-8 px-3">
        <h2 className="stroke-slate-950 text-3xl font-bold text-primary">
          <span>Profile</span>
        </h2>
        {/* profile container */}
        <div className="  grid grid-cols-1 place-items-center gap-5 rounded-md border-4 border-quaternary bg-slate-50 p-8">
          {/* image container */}
          <figure className="size-24">
            {/* image */}
            <img
              src={MyImage}
              alt="profile image"
              className=" size-full rounded-[50%]  border-2 border-primary object-cover"
            />
          </figure>
          <div className="grid grid-cols-1 place-items-start gap-3 text-sm font-bold text-secondary ">
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
