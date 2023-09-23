import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getMovies, getSearchMovie } from "../../../services/movie";

export const allMovieAsync = createAsyncThunk("movie/fetchMovie", async () => {
    const response = await getMovies();
    // The value we return becomes the `fulfilled` action payload
    return response.data.Search;
});

export const SearchMovieAsync = createAsyncThunk("movie/searchfetchMovie", async (title) => {
    try {
        const response = await getSearchMovie(title);
        return response.data.Search;
    } catch (err) {
        console.log("err", err);
    }
});

const initialState = {
    lists: [],
    movies: [],
    searchMovie: [],
};

const todosSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        todoAdded(state, action) {
            const newTodo = {
                id: new Date().getTime(),
                text: action.payload,
                isEditing: false
            };
            state.lists = [...state.lists, newTodo]
        },
        removeTodo(state, action) {
            const filterData = state.lists.filter((item) => item.id !== action.payload);
            state.lists = filterData;
        },
        editTodo(state, action) {
            state.lists = state.lists.map((todo) => todo.id === action.payload ? { ...todo, isEditing: true } : todo)

        },
        handleSave(state, action) {
            const { id, newText } = action.payload
            state.lists = state.lists.map((todo) => todo.id === id ? { ...todo, isEditing: false, text: newText } : todo)
          
        }
        // handleShow(state,action) {
        //     state.show = action.payload;
        // },
        // handleClose(state) {
        //     state.show = !state.show;
        // },
    },
    extraReducers: (builder) => {
        builder
            .addCase(allMovieAsync.fulfilled, (state, action) => {
                state.movies = action.payload;
            })
            .addCase(SearchMovieAsync.fulfilled, (state, action) => {
                state.searchMovie = action.payload;
            });
    },
});

export const { todoAdded, removeTodo, editTodo,handleSave } = todosSlice.actions;
export default todosSlice.reducer;
