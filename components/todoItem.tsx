

const TodoItem = ({todo} :any) => {
    console.log(todo)
    return (
        <div className="bg-gray-100 p-2 rounded-md">
            {todo?.title}
            d
        </div>
    );
}

export default TodoItem;