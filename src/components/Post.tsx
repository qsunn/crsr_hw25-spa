interface PostProps {
  author: {
    name: string;
    photo: string;
    nickname: string;
  };
  content: string;
  image: string;
  date: string;
}

function Post(props: PostProps) {
  return (
    <div className="container border rounded-[16px] border-slate-700 text-white max-w-screen-sm p-[16px] pl-[80px] flex flex-col relative">
      <img
        src={props.author.photo}
        alt="avatar"
        className="w-[48px] h-[48px] rounded-[50%] absolute top-[16px] left-[16px]"
      />
      <div className="flex gap-[8px]">
        <h2 className="font-bold text-md">{props.author.name}</h2>
        <p className="text-md text-slate-400">{props.author.nickname}</p>
        <span className="text-slate-400">&middot;</span>
        <p className="text-slate-400">{props.date}</p>
      </div>
      <div className="flex gap-[8px] flex-col">
        <p>{props.content}</p>
        {props.image && (
          <img
            src={props.image}
            alt="img"
            className="rounded-[24px] max-w-fit"
          />
        )}
      </div>
    </div>
  );
}

export default Post;
