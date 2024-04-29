import { prisma } from "@/utils/prisma";
import Form from "./shared/Form";
import { deleteTodo } from "@/actions/actions";
import DeleteTodo from "./deleteTodo";
import EditTodo from "./editTodo";

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

                <div key={index} className="bg-gray-100 p-3 rounded-md flex justify-between items-center">
                    <div>
                        {todo.title}
                    </div>

                    <div className="flex gap-2 items-center">
                        <EditTodo todo={todo} />
                        <DeleteTodo todo={todo} />
                    </div>
                </div>
            ))}
        </div>
    );
}

