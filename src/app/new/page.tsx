import Link from "next/link";
import {prisma} from "@/db";
import {redirect} from "next/navigation";

//add note to db
async function createToDo(data: FormData) {
    "use server" //this means its server code

    const title = data.get("title")?.valueOf()
    if (typeof title !== "string" || title.length === 0) {
        throw new Error("Invalid Title")
    }

    await prisma.todo.create({ data: { title, complete: false}})

    redirect("/")

}

export default function newPost() {
    return (
        <>
            <header>
                <h1 className='text-2xl mb-4'>New Note</h1>
            </header>
            <form action={createToDo} className="flex gap-2 flex-col">
                <input
                    type="text"
                    name="title"
                    placeholder="Title"
                    className="border border-slate-400 bg-transparent
                    rounded px-2 py-1 outline-none focus-within:border-slate-100"
                />
                <div className='flex gap-1 justify-end'>
                    <Link href='..' className='text-2xl border border-slate-300 text-slate-300 px-2 py-1 rounded
                    hover:bg-slate-600 focus-within:bg-slate-600 outline-none'>Cancel</Link>
                    <button className='text-2xl border border-slate-300 text-slate-300 px-2 py-1 rounded
                    hover:bg-slate-600 focus-within:bg-slate-600 outline-none'>Submit</button>
                </div>
            </form>
        </>
    )
}