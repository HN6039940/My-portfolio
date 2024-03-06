import MyImage from "../assets/image/MyImage.PNG";

const Profile = () => {
  return (
    <section className=" min-w-full  py-10 md:py-20" id="profile">
      <article className="container mx-auto grid grid-cols-1 place-items-center gap-8 px-3 md:mb-16 md:gap-16">
        <h2 className="stroke-slate-950 text-3xl font-bold text-primary sm:text-4xl ">
          <span>Profile</span>
        </h2>
        {/* profile container */}
        <div className="  grid grid-cols-1 place-items-center gap-5 rounded-md border-4 border-quaternary bg-slate-50 p-8 sm:gap-7 sm:p-6 md:gap-9 xl:w-10/12 xl:grid-cols-2 xl:gap-10 xl:p-16 ">
          {/* image container */}
          <figure className="size-24 sm:size-36 lg:size-48 xl:size-64">
            {/* image */}
            <img
              src={MyImage}
              alt="profile image"
              className=" size-full rounded-[50%]  border-2 border-primary object-cover"
            />
          </figure>
          <div className="grid grid-cols-1 place-items-start gap-3 text-sm font-bold text-secondary sm:text-lg lg:text-xl ">
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
