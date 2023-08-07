import Link from "next/link";

const data = [
  {
    id: "react",
    desc: "React is a JavaScript-based UI development library. Facebook and an open-source developer community run it. Although React is a library rather than a language, it is widely used in web development. The library first appeared in May 2013 and is now one of the most commonly used frontend libraries for web development.",
  },
  {
    id: "typescript",
    desc: "TypeScript allows specifying the types of data being passed around within the code, and has the ability to report errors when the types don't match. For example, TypeScript will report an error when passing a string into a function that expects a number. JavaScript will not. TypeScript uses compile time type checking.",
  },
  {
    id: "next",
    desc: "Next.js is a React framework that gives you building blocks to create web applications. By framework, we mean Next.js handles the tooling and configuration needed for React, and provides additional structure, features, and optimizations for your application.",
  },
];

export default function Blogs() {
  return (
    <div>
      {data.map((i) => (
        <div className="mb-6">
          <Link href={`/blogs/${i.id}`}>
            <p className="cursor-pointer capitalize text-[18px] font-semibold hover:text-blue-400">
              {i.id}
            </p>
          </Link>

          <p>{i.desc}</p>
        </div>
      ))}
    </div>
  );
}
