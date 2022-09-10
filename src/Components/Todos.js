import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {getAllTodos} from "../services/actions/todosAction";

const Todos = () => {
    const {isLoading, todos, error} = useSelector(state => state);
    console.log(todos)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getAllTodos())
    },[dispatch])
    return (
        <div>
            <h1>todos app</h1>
            { isLoading && <h3>Loading ....</h3> }
            {error && <h3 style={{color:"red"}}>{error.message}</h3> }
            <section>
                {todos && todos.map((todo) => {
                    return <article key={todo.id}>
                        <h4>{todo.id}</h4>
                        <h4>{todo.title}</h4>
                    </article>
                })}
            </section>
        </div>
    );
};

export default Todos;