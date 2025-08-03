"use client";

import { Authenticated, Unauthenticated } from "convex/react";
import { SignInButton, SignOutButton, UserButton } from "@clerk/nextjs";
import { useQuery ,useMutation} from "convex/react";
import { api } from "../../convex/_generated/api";

export default function Home() {

  const thumbnails = useQuery(api.thumbnails.getThumbnailsForUser)
  return (
    <>
      <Authenticated>
        <UserButton />
        <SignOutButton />
        <Content />
          {thumbnails?.map((thumbnail) =>{
              return <div key={thumbnail._id}>{thumbnail.title}</div>;
          })}
      </Authenticated>
      <Unauthenticated>
        <SignInButton />
      </Unauthenticated>
    </>
  );
}

function Content() {
    const createThumbnail = useMutation(api.thumbnails.createThumbnail);

  //const messages = useQuery(api.messages.getForCurrentUser);
  return <form onSubmit={(e) =>{
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const formData = new FormData(e.currentTarget);
    const title = formData.get("title") as string;
    createThumbnail({
      title,
    })
    form.reset();
  }}>
  <label>Title</label>
  <input name="title" className="text-white"></input>
  <button>Create</button>
  </form>
}