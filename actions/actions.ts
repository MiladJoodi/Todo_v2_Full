"use server"

import { revalidatePath } from "next/cache";
import { prisma } from "../utils/prisma"

// Add
export async function addTodo (state: string, formData: FormData) {
    const newTask = formData.get("newTask") as string;
    
    if(!newTask.trim()){
        return{
            status: "empty"
        }
    }
    console.log("first")

    await prisma.todo.create({
        data:{
            title: newTask
        }
    })
    revalidatePath("/add")
    return{
        status: "success"
    }
}

export async function deleteTodo(formData: FormData){
    const todoId = formData.get("todoId") as string;
    console.log(todoId)

    await prisma.todo.delete({
        where: {
            id: todoId
        }
    })
    console.log("first")
    revalidatePath("/")
    return{
        status: "success"
    }
}

// edit
export async function editTodo(formData: FormData){
    console.log("edit")
    const newTitle = formData.get("newTodo") as string
    const todoId = formData.get("todoId") as string

    await prisma.todo.update({
        where: {
            id: todoId
        },
        data: {
            title: newTitle
        }
    })
    revalidatePath("/")
    return{
        status: "success"
    }
}