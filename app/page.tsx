import Posts from "./components/Posts";
import ProfilePic from "./components/ProfilePic";

export const revalidate = 86400

export default async function Home() {
  return (
    <div className="mx-auto">
      <ProfilePic />
      <p className="mt-12 mb-12 text-3xl text-center dark:text-white">
        Hello and Welcome 👋&nbsp;
        <span className="whitespace-nowrap">
          I'am <span className="font-bold">mehdi</span>.
        </span>
      </p>
      {/* @ts-expect-error Server Component */}
      <Posts />
    </div>
  )
}
