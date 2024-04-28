import { addTodo } from "@/actions/actions";
import AddForm from "@/components/addForm";
import Todos from "@/components/todos";

const Add = () => {
    return (
        <div className="p-10 bg-white h-full flex flex-col gap-4">
            <AddForm action={addTodo} />
            <Todos />

        </div>
    );
}

export default Add;