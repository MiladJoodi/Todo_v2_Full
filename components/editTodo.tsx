"use client"

import { editTodo } from "@/actions/actions";
import { useEffect, useState } from "react";
import { useFormState } from 'react-dom'
import { toast } from "./ui/use-toast";

const initialState = {
    message: '',
  }

export type todoType = {
    id: string;
    title?: string | undefined;
    isCompleted: boolean;
    createdAt: Date;
}

const EditTodo = ({ todo }: { todo: todoType }) => {
    const [state, action] = useFormState(editTodo, {
        message: "",
      });
      
      const [editTodoShow, setEditTodoShow] = useState(false)

    const showEditInput = () => {
        setEditTodoShow(!editTodoShow)
    }

    // submit handler - close input
    const submitHandler = ()=>{
        setEditTodoShow(false)
    }


     // useEffect
     useEffect(()=> {
        if(state.message === "success"){
            toast({
                title: "Hooray 🍕",
                description: "Todo Edited!"
            })
        }
        if(state.message === "empty"){
            toast({
                title: "Empty ❌",
                description: "It's Empty!"
            })
        }
    }, [state])
    

    return (
        <div className="flex items-center gap-2 h-[25px]">

            {editTodoShow ? (
                <form
                    action={action}
                    className="flex items-center"
                    onSubmit={submitHandler}
                >
                    <input
                        type="hidden"
                        name="todoId"
                        value={todo.id}
                    />

                    <input
                        type="text"
                        name="newTodo"
                        className="rounded-md bg-transparent border outline-none w-[200px] px-2"
                        placeholder={todo.title}
                    />

                    <button type="submit">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5 text-green-700">
                            <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                        </svg>
                    </button>
                </form>
            ) : null}


            <button
                onClick={showEditInput}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5 cursor-pointer hover:text-green-600 duration-200 transition-all">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                </svg>
            </button>

            <div>

            </div>
        </div>
    );
}

export default EditTodo;