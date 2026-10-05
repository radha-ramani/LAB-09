import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    courses: [
        {
            id: 1,
            code: "CS101",
            name: "Introduction to Programming",
            instructor: "Dr. Kumar",
            credits: 4
        },
        {
            id: 2,
            code: "CS102",
            name: "Data Structures",
            instructor: "Dr. Priya",
            credits: 4
        },
        {
            id: 3,
            code: "CS103",
            name: "Database Management Systems",
            instructor: "Dr. Ravi",
            credits: 3
        }
    ]
};

const courseSlice = createSlice({
    name: "courses",

    initialState,

    reducers: {

        addCourse: (state, action) => {
            state.courses.push({
                id: Date.now(),
                ...action.payload
            });
        },

        updateCourse: (state, action) => {
            const index = state.courses.findIndex(
                course => course.id === action.payload.id
            );

            if (index !== -1) {
                state.courses[index] = action.payload;
            }
        },

        deleteCourse: (state, action) => {
            state.courses = state.courses.filter(
                course => course.id !== action.payload
            );
        }
    }
});

export const {
    addCourse,
    updateCourse,
    deleteCourse
} = courseSlice.actions;

export default courseSlice.reducer;