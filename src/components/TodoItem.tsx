"use client"

type TodoItemProps = {
    id: string;
    title: string;
    description: string;
    complete: boolean;
    toggleTodo: (id: string, complete: boolean) => void
}

export function TodoItem({ id, title, description, complete, toggleTodo }: TodoItemProps) {
    return (
        <li className='flex flex-col gap-1 items-start'>
            <div className='flex gap-1 items-center'>
                <input
                    id={id}
                    type='checkbox'
                    className='cursor-pointer peer'
                    defaultChecked={complete}
                    onChange={e => toggleTodo(id, e.target.checked)}
                />
                <label
                    htmlFor={id}
                    className='cursor-pointer peer-checked:line-through
                    peer-checked:text-slate-500'
                >
                    {title} - {description}
                </label>
            </div>
        </li>
    );
}
