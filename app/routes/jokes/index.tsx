import { Link, useLoaderData, useCatch } from "@remix-run/react";
import { json } from "@remix-run/node";
import { db } from "~/utils/db.server";

export const loader = async () => {
  const count = await db.joke.count();
  const randomNum = Math.floor(Math.random() * count);
  const [joke] = await db.joke.findMany({
    take: 1,
    skip: randomNum,
    select: { content: true, name: true },
  });

  if (!joke) {
    throw new Response("No random joke found", {
      status: 404,
    });
  }

  return json({ joke });
};

export default function JokesIndexRoute() {
  const { joke } = useLoaderData<typeof loader>();

  return (
    <div>
      <h2 className="mb-3 text-2xl">Here's a random joke:</h2>
      <p>{joke.content}</p>
      <Link to=".">"{joke.name}" Permalink</Link>
    </div>
  );
}

export function CatchBoundary() {
  const caught = useCatch();

  if (caught.status === 404) {
    return (
      <div className="error-container">
        There are no jokes to display.
      </div>
    );
  }

  throw new Error(`Unhandled error: ${caught.status}`);
}

export function ErrorBoundary() {
  return (
    <div className="error-container">
      I did a whoopsies.
    </div>
  );
}
