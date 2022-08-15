import Post from "../components/Post";

function Feed() {
  return (
    <div className="pt-[72px] pb-[16px] px-[16px] bg-slate-900 min-w-screen min-h-screen">
      <div className="grid grid-cols-1 auto-rows-min place-items-center gap-[16px]">
        <Post
          author={{
            name: "Anakin Skywalker",
            photo:
              "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1780&q=80",
            nickname: "@dart_vader",
          }}
          content="New outfit, wdyt?"
          image={
            "https://images.unsplash.com/photo-1623476408624-721c9185d569?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2069&q=80"
          }
          date={"26 July"}
        />
        <Post
          author={{
            name: "Aaron Watts",
            photo:
              "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2080&q=80",
            nickname: "@just_a_guy",
          }}
          content="Hi world"
          image=""
          date={"28 July"}
        />
        <Post
          author={{
            name: "Random Guy",
            photo:
              "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2080&q=80",
            nickname: "@random_guy",
          }}
          content='First pic of google "random number"'
          image="https://upload.wikimedia.org/wikipedia/commons/6/6a/Random_digits.png"
          date={"30 July"}
        />
      </div>
    </div>
  );
}

export default Feed;
