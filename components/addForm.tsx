"use client";

import { addTodo } from "@/actions/actions";
import Form from "./shared/Form";
import Input from "./shared/Input";
import Button from "./shared/Button";
import { useFormState } from "react-dom";
import { useToast } from "./ui/use-toast";
import { useEffect } from "react";

const AddForm = ({action, ...props}:any) => {

    const { toast } = useToast()

    const [
        state,
        formAction
    ] = useFormState(action, {
            status: null,
    });

    // useEffect
    useEffect(()=> {
        if(state.status === "success"){
            toast({
                title: "Hooray 🍕",
                description: "New todo added!"
            })
        }
        if(state.status === "empty"){
            toast({
                title: "Empty ❌",
                description: "It's Empty!"
            })
        }
    }, [state])
    
    return (
        <Form
        action={formAction}
        {...props}
        className="flex items-center gap-3 relative">
                <div className="absolute left-1 opacity-45">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-7 h-7">
                        <path stroke-linecap="round" stroke-linejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                    </svg>
                </div>
                <Input
                    placeholder="Enter New Task"
                    className="pl-10 bg-gray-100"
                    name="newTask"
                    type="text"
                />
                <Button
                type="submit"
                text="Add"
                actionButton
                />
            </Form>
    );
}

export default AddForm;