import { prisma } from "@/utils/prisma";
import Form from "./shared/Form";
import { deleteTodo } from "@/actions/actions";
import DeleteTodo from "./deleteTodo";

export interface todoProps {
    title?: string | null
    id: string,
    isCompleted: boolean
}

async function getTodos() {
    const data = await prisma.todo.findMany({
        select: {
            title: true,
            id: true,
            isCompleted: true
        },
        orderBy: {
            createdAt: "desc",
        }
    })
    return data;
}


export default async function Todos() {

    const data = await getTodos();
    console.log(data)

    return (
        <div className="flex flex-col gap-2">
            {data.map((todo: any, index: any) => (

                <div key={index} className="bg-gray-100 p-2 rounded-md flex justify-between items-center">
                    {todo.title}

                    <div className="flex items-center gap-2 opacity-70">
                
                        <DeleteTodo todo={todo} />

                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5 cursor-pointer hover:text-green-600 duration-200 transition-all">
                            <path stroke-linecap="round" stroke-linejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                        </svg>


                    </div>
                </div>
            ))}
        </div>
    );
}

